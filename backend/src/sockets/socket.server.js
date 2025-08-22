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

const initSocketServer = httpServer => {
  const io = new Server(httpServer, {});

  // Socket Middleware to handle authentication or other pre-connection logic
  io.use(async (socket, next) => {
    const cookies = cookie.parse(socket.handshake.headers?.cookie || "");

    if (!cookies.token) {
      return next(new Error("Authentication error: No token provided"));
    }

    try {
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
      const userMessage = await messageModel.create({
        chat: messagePayLoad.chat,
        user: socket.user._id,
        content: messagePayLoad.content,
        role: "user",
      });

      const vectors = await generateVector(messagePayLoad.content);

      const memory = await queryMemory({
        queryVector: vectors,
        limit: 3,
        metadata: {
          user: socket.user._id,
        },
      });

      console.log(" queried memory: ", memory);

      await createMemory({
        vectors,
        messageId: userMessage._id,
        metadata: {
          chatId: messagePayLoad.chat,
          userId: socket.user._id,
          text: messagePayLoad.content,
        },
      });

      /* Short Term Memory Using chatHistory */
      const chatHistory = (
        await messageModel
          .find({
            chat: messagePayLoad.chat,
          })
          .sort({ createdAt: -1 })
          .limit(20)
          .lean()
      ).reverse();

      /* Short Term Memory */
      const STM = chatHistory.map(chat => {
        return {
          role: chat.role,
          parts: [{ text: chat.content }],
        };
      });

      /* Long Term Memory */
      const LTM = [
        {
          role: "user",
          parts: [
            {
              text: `these are the some relevant pieces of information extracted from the previous conversations or chats of the user: use them to generate a response ${(memory && memory.length > 0)
                ? memory.map(m => m.metadata?.text || '').join("\n")
                : 'No previous context available'}`,
            },
          ],
        },
      ];

      console.log("Long Term Memory: ", LTM[0]);
      console.log("Short Term Memory: ", STM[0]);

      /* In documentation it is showed that in response gemini ai only need  role and parts so we are extracting it from chatHistory using map */
      /* giving both Long and Short Term Memory to AI */
      const response = await generateAIResponse([...LTM, ...STM]);

      const responseMessage = await messageModel.create({
        chat: messagePayLoad.chat,
        user: socket.user._id,
        content: response,
        role: "model",
      });

      const responseVectors = await generateVector(response);

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
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected");
    });
  });
};

module.exports = initSocketServer;
