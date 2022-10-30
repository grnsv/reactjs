import React, {
  useCallback, useContext, useEffect, useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box, Button, List, TextField, Typography,
} from '@mui/material';
import { chatsSelector, errorSelector, loadingSelector } from '../redux/chat/selectors';
// import * as types from '../redux/chat/actionTypes';
import { getChats } from '../redux/chat/actions';
import { db } from '../service/firebase';
import ChatItem from '../components/ChatItem';
import { ThemeContext } from '../context';

function HomePage() {
  const { theme } = useContext(ThemeContext);

  const chats = useSelector(chatsSelector);
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const dispatch = useDispatch();
  const [chatName, setChatName] = useState('');

  const handleAdd = () => {
    // dispatch({
    //   type: types.ADD_CHAT,
    //   payload: {
    //     id: Date.now(),
    //     name: chatName,
    //   },
    // });
    db.child('chats').push({
      name: chatName,
    });
  };

  const handleDelete = (id) => {
    // dispatch({
    //   type: types.DELETE_CHAT,
    //   payload: id,
    // });
    db.child('chats').child(id).remove();
  };

  const fetchChats = useCallback(() => dispatch(getChats()), [dispatch]);

  useEffect(() => {
    fetchChats();
  }, [fetchChats]);

  if (loading) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>
          Error:
          {error}
        </p>
        <button type="button" onClick={fetchChats}>Click to repeat</button>
      </div>
    );
  }

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
        {Object.keys(chats).map((key) => (
          <ChatItem
            key={key}
            name={chats[key].name}
            id={key}
            handleDelete={handleDelete}
          />
        ))}
      </List>
    </Box>
  );
}

export default HomePage;
