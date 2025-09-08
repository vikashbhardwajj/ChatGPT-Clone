const { Server } = require("socket.io");
const cookie = require("cookie");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model"); // Adjust the path as necessary
// const generateAIResponse = require("../services/ai.service").generateAIResponse;
const {
  generateAIResponse,
  generateVector,
} = require("../services/ai.service");
const messageModel = require("../models/message.model");
const { createMemory, queryMemory } = require("../services/vector.service");

const buildSTM =  chatHistory => {
  return chatHistory.map(chat => {
    return {
      role: chat.role,
      parts: [{ text: chat.content }],
    };
  });
};

const buildLTM = memory => {
  return [
    {
      role: "user",
      parts: [
        {
          text: `These are relevant pieces of information extracted from the user's past conversations. Use them only if they help improve your response ${
            memory && memory.length > 0
              ? memory.map(m => m.metadata?.text || "").join("\n")
              : "No previous context available"
          }`,
        },
      ],
    },
  ];
};

const initSocketServer = httpServer => {
  const io = new Server(httpServer, {
    cors: {
      origin: "http://localhost:5173", 
      credentials: true,
      // allowedHeaders: ["content-type", "Authorization"],
      methods: ["GET", "POST"],
      
    }
  });

  // Socket Middleware to handle authentication or other pre-connection logic
  io.use(async (socket, next) => {
    try {
      const cookies = cookie.parse(socket.handshake.headers?.cookie || "");

      if (!cookies.token) {
        return next(new Error("Authentication error: No token provided"));
      }

      const decoded = jwt.verify(cookies.token, process.env.JWT_SECRET);
      const user = await userModel.findById(decoded.id);
      if (!user) {
        return next(new Error("Authentication error: User not found"));
      }

      socket.user = user; // Attach user to socket for later use

      next();
    } catch (err) {
      return next(new Error("Authentication error: Invalid token"));
    }
  });

  io.on("connection", socket => {
    console.log("A user connected");

    socket.on("ai_user_request", async messagePayLoad => {
      try {
        // here userMessage and vectors are done in parallel using Promise.all
        const [userMessage, vectors] = await Promise.all([
          messageModel.create({
            chat: messagePayLoad.chat,
            user: socket.user._id,
            content: messagePayLoad.content,
            role: "user",
          }),
          generateVector(messagePayLoad.content),
        ]);

        const memory = await queryMemory({
          queryVector: vectors,
          limit: 3,
          metadata: {
            user: socket.user._id,
          },
        });

        // here  chatHistory and createMemory are done in parallel using Promise.all
        const [chatHistory] = await Promise.all([
          /* Short Term Memory Using chatHistory */
          messageModel
            .find({
              chat: messagePayLoad.chat,
            })
            .sort({ createdAt: -1 })
            .limit(20)
            .lean()
            .then(docs => docs.reverse()),

          /* save vector data in Pinecone database using createMemory */
          createMemory({
            vectors,
            messageId: userMessage._id,
            metadata: {
              chatId: messagePayLoad.chat,
              userId: socket.user._id,
              text: messagePayLoad.content,
            },
          }),
        ]);

        // STM and LTM can be prepared in parallel using promise.all
        /* Short Term Memory */
        /* In documentation it is showed that in response gemini ai only need  role and parts so we are extracting it from chatHistory using map */
        const STM = buildSTM(chatHistory);

        /* Long Term Memory */
        const LTM = buildLTM(memory);

        /* giving both Long and Short Term Memory to AI */
        const response = await generateAIResponse([...LTM, ...STM]);

        // here responseMessage and responseVectors are done in parallel using Promise.all
        const [responseMessage, responseVectors] = await Promise.all([
          messageModel.create({
            chat: messagePayLoad.chat,
            user: socket.user._id,
            content: response,
            role: "model",
          }),
          generateVector(response),
        ]);

        await createMemory({
          vectors: responseVectors,
          messageId: responseMessage._id,
          metadata: {
            chatId: messagePayLoad.chat,
            userId: socket.user._id,
            text: response,
          },
        });

        socket.emit("ai_response", {
          content: response,
          chat: messagePayLoad.chat,
        });
      } catch (error) {
        console.error("AI request failed:", err);
        socket.emit("ai_error", { error: "AI request failed. Try again." });
      }
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected");
    });
  });
};

module.exports = initSocketServer;
