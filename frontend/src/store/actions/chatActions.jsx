import axios from "../../api/axiosConfig";
import { loadChats, loadMessages } from "../slice/chatSlice";

export const asyncLoadChats = () => async (dispatch, getState) => {
  try {
    const response = await axios.get("/api/chat");
    const chats = response.data.chats;

    dispatch(loadChats(chats));
  } catch (error) {
    console.error("Error loading chats:", error);
  }
};

export const asyncLoadMessages = chatId => async (dispatch, getState) => {
  try {
    const response = await axios.get(`/api/chat/messages/${chatId}`);
    const messages = response.data.messages;
    
    dispatch(loadMessages({ chatId, messages }));
  } catch (error) {
    console.error("Error loading messages:", error);
  }
};
