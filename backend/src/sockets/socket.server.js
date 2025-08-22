const { Server } = require("socket.io");
const cookie = require("cookie");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model"); // Adjust the path as necessary
// const generateAIResponse = require("../services/ai.service").generateAIResponse;
const { generateAIResponse, generateVector } = require("../services/ai.service");
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

      console.log(user);

      socket.user = user; // Attach user to socket for later use

      next();
    } catch (err) {
      return next(new Error("Authentication error: Invalid token"));
    }
  });

  io.on("connection", socket => {
    console.log("A user connected");

    socket.on("ai_user_request", async messagePayLoad => {

      // await messageModel.create({
      //   chat: messagePayLoad.chat,
      //   user: socket.user._id,
      //   content: messagePayLoad.content,
      //   role: "user",
      // });

      // await createMemory({
      //   vectors: messagePayLoad.vectors,
      //   metadata: messagePayLoad.metadata,
      //   messageId: messagePayLoad.messageId,
      // })

      const vectors = await generateVector(messagePayLoad.content);

      console.log("vectors: ", vectors);

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

      /* In documentation it is showed that in response gemini ai only need  role and parts so we are extracting it from chatHistory using map */
      const response = await generateAIResponse(
        chatHistory.map(chat => {
          return {
            role: chat.role,
            parts: [{ text: chat.content }],
          };
        })
      );

      // await messageModel.create({
      //   chat: messagePayLoad.chat,
      //   user: socket.user._id,
      //   content: response,
      //   role: "model",
      // });

      console.log("chatHistory: ", chatHistory);
      console.log("response: ", response);

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
