const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");
const { createChat, getChats, getMessages} = require("../controllers/chat.controller");

const router = express.Router();

/* POST /api/chat/ */
router.post("/", authMiddleware.authUser, createChat);

/* GET /api/chat/ */
router.get("/", authMiddleware.authUser, getChats);

/* GET /api/chat/messages/:id */
router.get("/messages/:id", authMiddleware.authUser, getMessages);

module.exports = router;
