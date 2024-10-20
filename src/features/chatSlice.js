import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [],
  currentUser: 'You',
  initialMessageSent: false,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    receiveMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    setInitialMessageSent: (state) => {
      state.initialMessageSent = true;
    },
  },
});

export const { sendMessage, receiveMessage, setInitialMessageSent } = chatSlice.actions;

export default chatSlice.reducer;
