import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Box, Button, Grid, TextField, Typography,
} from '@mui/material';
import { messagesSelector } from '../redux/reducers/messageReducer/messagesSelector';
import Message from '../components/Message';

function ChatPage() {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const messages = useSelector(messagesSelector);
  const dispatch = useDispatch();
  const { chatId } = useParams();
  const inputRef = useRef(null);

  const handleAdd = () => {
    let id = 1;
    if (messages.length > 0) id = messages[messages.length - 1].id + 1;
    if (author.length > 0) {
      dispatch({
        type: 'addMessage',
        payload: {
          id, author, text, chatId: Number(chatId),
        },
      });
    } else {
      dispatch({
        type: 'addMessage',
        payload: {
          id, author: 'Robot', text: 'Author name needed', chatId: Number(chatId),
        },
      });
    }
  };

  function focusTextField(input) {
    if (input) {
      input.focus();
    }
  }

  useEffect(() => {
    if (
      messages.length > 0
      && author
      && messages[messages.length - 1].author !== 'Robot'
    ) {
      setTimeout(() => dispatch({
        type: 'addMessage',
        payload: {
          id: messages[messages.length - 1].id + 1,
          author: 'Robot',
          text: `${author}, your opinion is very important to us`,
          chatId: Number(chatId),
        },
      }), 1500);
    }
    focusTextField(inputRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
                author={message.author}
                text={message.text}
                handleDelete={() => dispatch({ type: 'deleteMessage', payload: message.id })}
              />
            ))
            : null}
        </Box>
      </Grid>
    </Grid>
  );
}

export default ChatPage;
