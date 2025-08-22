const chatModel = require("../models/chat.model");

const createChat = async (req, res) => {
  const { title } = req.body;

  const user = req.user; // User is set by authMiddleware
  const chat = await chatModel.create({
    user: user._id,
    title,
  });

  res.status(201).json({
    message: "Chat created successfully",
    chat: {
      id: chat._id,
      title: chat.title,
      lastActivity: chat.lastActivity,
      user: chat.user,
    },
  });
};

module.exports = {
  createChat,
};
