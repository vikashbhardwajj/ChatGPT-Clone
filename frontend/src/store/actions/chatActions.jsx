import axios from "../../api/axiosConfig";
import {  loadChats } from "../slice/chatSlice";

export const asyncLoadChats = () => async (dispatch, getState) => {
  try {
    const response = await axios.get("/api/chat");
      const chats = response.data.chats;
      console.log(chats)
    
    dispatch(loadChats(chats));
  } catch (error) {
    console.error("Error loading chats:", error);
  }
};
