import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../features/chatSlice';
import { Box, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleSendMessage = () => {
    if (message.trim()) {
      dispatch(sendMessage({
        id: Date.now(),
        user: 'You',
        text: message,
        timestamp: new Date().toLocaleTimeString(),
      }));
      setMessage('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
      <TextField
        variant="outlined"
        placeholder="Type your message..."
        fullWidth
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        sx={{ marginRight: '10px' }}
      />
      <IconButton
        color="primary"
        onClick={handleSendMessage}
        sx={{ borderRadius: '50%' }}
      >
        <SendIcon />
      </IconButton>
    </Box>
  );
};

export default MessageInput;
