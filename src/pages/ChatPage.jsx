import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Box, Button, Grid, TextField, Typography,
} from '@mui/material';
import { messagesSelector } from '../redux/reducers/messageReducer/messagesSelector';
import { actionTypes } from '../redux/actionTypes';
import Message from '../components/Message';

function ChatPage() {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const messages = useSelector(messagesSelector);
  const dispatch = useDispatch();
  const { chatId } = useParams();
  const inputRef = useRef(null);

  const botName = 'Robot';

  const handleAdd = () => dispatch((disp) => {
    let id = 1;
    if (messages.length > 0) id = messages[messages.length - 1].id + 1;
    if (author.length > 0) {
      disp({
        type: actionTypes.ADD_MESSAGE,
        payload: {
          id, author, text, chatId: Number(chatId),
        },
      });
      if (author !== botName) {
        setTimeout(() => disp({
          type: actionTypes.ADD_MESSAGE,
          payload: {
            id: id + 1,
            author: botName,
            text: `${author}, your opinion is very important to us`,
            chatId: Number(chatId),
          },
        }), 1500);
      }
    } else {
      disp({
        type: actionTypes.ADD_MESSAGE,
        payload: {
          id, author: botName, text: 'Author name needed', chatId: Number(chatId),
        },
      });
    }
  });

  const handleDelete = (id) => dispatch((disp) => {
    setTimeout(() => disp({
      type: actionTypes.DELETE_MESSAGE,
      payload: id,
    }), 500);
  });

  function focusTextField(input) {
    if (input) {
      input.focus();
    }
  }

  useEffect(() => {
    focusTextField(inputRef.current);
  }, [messages]);

  return (
    <Grid container spacing={3} sx={{ margin: '10px 0 0' }}>
      <Grid item>
        <Box
          component="form"
          sx={{
            m: 1, borderRadius: '10px', gap: '10px', width: '400px', margin: '10px', padding: '15px', backgroundColor: '#fff',
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            sx={{ margin: '10px 0 10px 0', backgroundColor: '#fff' }}
            id="outlined-multiline-flexible"
            fullWidth
            label="Author name"
            autoFocus
            value={author}
            inputRef={inputRef}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <TextField
            sx={{ margin: '10px 0 10px 0', backgroundColor: '#fff' }}
            id="outlined-multiline-flexible"
            fullWidth
            label="Message text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button sx={{ margin: '10px 0 10px 0' }} variant="outlined" size="large" onClick={handleAdd}>
            SEND MESSAGE
          </Button>
        </Box>
      </Grid>
      <Grid item xs={8}>
        <Box
          sx={{
            m: 1, borderRadius: '10px', gap: '10px', margin: '10px', padding: '15px', backgroundColor: '#fff',
          }}
        >
          <Typography variant="h5" component="div" color="primary">Messages</Typography>
          {messages.length > 0
            ? messages.filter((message) => {
              if (!chatId) return true;
              return Number(message.chatId) === Number(chatId);
            }).map((message) => (
              <Message
                key={message.id}
                id={message.id}
                author={message.author}
                text={message.text}
                handleDelete={handleDelete}
              />
            ))
            : null}
        </Box>
      </Grid>
    </Grid>
  );
}

export default ChatPage;
