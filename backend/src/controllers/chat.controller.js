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

const getChats = async (req, res) => {
  const user = req.user; // User is set by authMiddleware

  const chats = await chatModel.find({ user: user._id });
  res.status(200).json({
    chats: chats.map(chat => ({
      id: chat._id,
      title: chat.title,
      lastActivity: chat.lastActivity,
      user: chat.user,
    })),
  });
};

module.exports = {
  createChat,
  getChats,
};
