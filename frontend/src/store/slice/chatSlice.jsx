import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    chats: [],
    activeChatId: null,
    status: "idle",
};

const cartSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    loadChats: (state, action) => {
      state.chats = action.payload;
    },

    createChat: (state, action) => {
      state.chats.push(action.payload);
    },
    removeChat: (state, action) => {
      state.chats = state.chats.filter(chat => chat.id !== action.payload);
    },
    clearChats: state => {
      state.chats = [];
    },
  },
});

export const { createChat, removeChat, clearChats, loadChats } =
  cartSlice.actions;
export default cartSlice.reducer;
