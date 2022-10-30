import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box, Button, List, TextField, Typography,
} from '@mui/material';
import { chatsSelector } from '../redux/reducers/chatReducer/chatsSelector';
import ChatItem from '../components/ChatItem';
import { ThemeContext } from '../context';

function HomePage() {
  const { theme } = useContext(ThemeContext);

  const chats = useSelector(chatsSelector);
  const dispatch = useDispatch();
  const [chatName, setChatName] = useState('');

  const handleAdd = () => {
    dispatch({
      type: 'addChat',
      payload: {
        id: Date.now(),
        name: chatName,
      },
    });
  };

  return (
    <Box style={{ margin: '10px', background: theme.background, color: theme.textColor }}>
      <Typography variant="h5" component="div" color="primary">Chat list</Typography>
      <TextField
        sx={{ margin: '10px', backgroundColor: '#fff' }}
        id="outlined-multiline-flexible"
        label="Chat name"
        value={chatName}
        onChange={(e) => setChatName(e.target.value)}
      />
      <Button sx={{ margin: '10px', height: '56px' }} variant="outlined" size="large" onClick={handleAdd}>
        Add chat
      </Button>
      <List sx={{ margin: '10px 0 10px 0', width: '100%', bgcolor: 'background.paper' }}>
        {chats.map((chat) => (
          <ChatItem key={chat.id} name={chat.name} id={chat.id} handleDelete={() => dispatch({ type: 'deleteChat', payload: chat.id })} />
        ))}
      </List>
    </Box>
  );
}

export default HomePage;
