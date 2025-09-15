import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chats: [],
  messages: [],
  activeChatId: null,
  status: "idle",
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    loadChats: (state, action) => {
      state.chats = action.payload;
    },

    loadMessages: (state, action) => {
      const { chatId, messages } = action.payload;
     state.messages = messages;

      
      // if (chat) {
      //   chat.messages = messages;
      // }


      // state.chats = state.chats.map(chat => {
      //   if (chat.id === chatId) {
      //     return { ...chat, messages: messages };
      //   }
      //   return chat;
      // });

      // console.log(state.chats);
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

export const { createChat, loadMessages, removeChat, clearChats, loadChats } =
  chatSlice.actions;
export default chatSlice.reducer;
