import React, { useContext, useState } from 'react';
import {
  Box, Button, List, TextField, Typography,
} from '@mui/material';
import ChatItem from '../components/ChatItem';
import { ThemeContext } from '../context';

function HomePage() {
  const { theme } = useContext(ThemeContext);

  const [chatList, setChatList] = useState([
    { name: 'Some chat', id: '1' },
    { name: 'Complicated discussion', id: '2' },
    { name: 'Descriptions and documentation', id: '3' },
  ]);
  const [chatName, setChatName] = useState('');

  const handleDelete = (id) => {
    const filtered = chatList.filter((chat) => chat.id !== id);
    setChatList(filtered);
  };

  const handleAdd = () => {
    const obj = {
      id: Date.now(),
      name: chatName,
    };
    setChatList([...chatList, obj]);
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
        {chatList.map((chat) => (
          <ChatItem name={chat.name} key={chat.id} id={chat.id} handleDelete={handleDelete} />
        ))}
      </List>
    </Box>
  );
}

export default HomePage;
