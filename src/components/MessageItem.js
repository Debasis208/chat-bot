import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const MessageItem = ({ message }) => {
  const isUser = message.user === 'You';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: isUser ? 'flex-end' : 'flex-start',
        mb: 2,
      }}
    >
      <Paper
        sx={{
          maxWidth: '70%',
          padding: '10px',
          backgroundColor: isUser ? '#e0f7fa' : '#eeeeee',
          color: isUser ? '#006064' : '#424242',
          alignSelf: isUser ? 'flex-end' : 'flex-start',
        }}
      >
        <Typography variant="body1">{message.text}</Typography>
      </Paper>
      <Typography variant="caption" sx={{ color: '#757575', mt: 0.5 }}>
        {message.timestamp}
      </Typography>
    </Box>
  );
};

export default MessageItem;
