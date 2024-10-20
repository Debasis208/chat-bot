import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Chat from './components/Chat';
import { Container } from '@mui/material';

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="sm">
        <Chat />
      </Container>
    </Provider>
  );
}

export default App;
