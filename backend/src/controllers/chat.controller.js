const chatModel = require("../models/chat.model");
const messageModel = require("../models/message.model");

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



const getMessages = async (req, res) => {
  const chatId  = req.params.id;
  

  const messages = await messageModel.find({chat: chatId}).sort({ createdAt: 1 });

  if (!messages) {
    return res.status(404).json({ message: "Chat not found" });
  }

  res.status(200).json({
    message: "Messages fetched successfully",
    messages: messages
  })


}

module.exports = {
  createChat,
  getChats,
  getMessages
};
