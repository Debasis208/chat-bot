import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { receiveMessage, setInitialMessageSent } from '../features/chatSlice';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { Box, Paper } from '@mui/material';

const Chat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);
  const initialMessageSent = useSelector((state) => state.chat.initialMessageSent);
  
  // Create a ref to the message container
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (!initialMessageSent) {
      dispatch(receiveMessage({
        id: messages.length + 1,
        user: 'Chat Bot',
        text: 'Hello, how can I help you?',
        timestamp: new Date().toLocaleTimeString(),
      }));
      dispatch(setInitialMessageSent());
    }
  }, [initialMessageSent, messages.length, dispatch]);

  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].user === 'You') {
      const timer = setTimeout(() => {
        dispatch(receiveMessage({
          id: messages.length + 1,
          user: 'Chat Bot',
          text: 'This is an automatic response to your query.',
          timestamp: new Date().toLocaleTimeString(),
        }));
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [messages, dispatch]);

  // Scroll to the bottom of the message container when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <Box sx={{ p: 2 }}>
      <Paper elevation={3} sx={{ height: '70vh', overflow: 'auto', p: 2 }}>
        <MessageList messages={messages} />
        {/* Empty div to help with scrolling to the bottom */}
        <div ref={messagesEndRef} />
      </Paper>
      <MessageInput />
    </Box>
  );
};

export default Chat;
