import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box, Button, Grid, TextField, Typography,
} from '@mui/material';
import Message from '../components/Message';

function ChatPage() {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [messageList, setMessageList] = useState([
    {
      id: 1, author: 'Author1', text: 'Message1', chatId: 2,
    },
    {
      id: 2, author: 'Author2', text: 'Message2', chatId: 1,
    },
    {
      id: 3, author: 'Author3', text: 'Message3', chatId: 3,
    },
  ]);
  const { chatId } = useParams();
  const inputRef = useRef(null);

  const handleClick = () => {
    let id = 1;
    if (messageList.length > 0) id = messageList[messageList.length - 1].id + 1;
    if (author.length > 0) {
      setMessageList([...messageList, {
        id, author, text, chatId,
      }]);
    } else {
      setMessageList([...messageList, {
        id, author: 'Robot', text: 'Author name needed', chatId,
      }]);
    }
  };

  function focusTextField(input) {
    if (input) {
      input.focus();
    }
  }

  useEffect(() => {
    if (
      messageList.length > 0
      && messageList[messageList.length - 1].author !== 'Robot'
    ) {
      setTimeout(() => {
        setMessageList([...messageList, {
          id: messageList[messageList.length - 1].id + 1,
          author: 'Robot',
          text: `${author}, your opinion is very important to us`,
          chatId,
        }]);
      }, 1500);
    }
    focusTextField(inputRef.current);
  }, [messageList, author, chatId]);

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
          <Button sx={{ margin: '10px 0 10px 0' }} variant="outlined" size="large" fullWidth onClick={handleClick}>
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
          {messageList.length > 0
            ? messageList.filter((message) => {
              if (!chatId) return true;
              return Number(message.chatId) === Number(chatId);
            }).map((message) => (
              <Message author={message.author} text={message.text} key={message.id} />
            ))
            : null}
        </Box>
      </Grid>
    </Grid>
  );
}

export default ChatPage;
