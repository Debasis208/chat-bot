import React from 'react';
import { useSelector } from 'react-redux';
import { List, ListItem } from '@mui/material';
import MessageItem from './MessageItem';

const MessageList = () => {
  const messages = useSelector((state) => state.chat.messages);

  return (
    <List>
      {messages.map((message) => (
        <ListItem key={message.id} sx={{ display: 'block' }}>
          <MessageItem message={message} />
        </ListItem>
      ))}
    </List>
  );
};

export default MessageList;
