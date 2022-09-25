import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box, Button, createTheme, Grid, List, TextField, ThemeProvider, Typography,
} from '@mui/material';
import { red } from '@mui/material/colors';
import Chats from '../components/Chats';
import Message from '../components/Message';

const theme = createTheme({
  palette: {
    primary: {
      main: red[400],
    },
  },
});

function ChatsPage() {
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [chatList] = useState([
    { name: 'Some chat', id: '1' },
    { name: 'Complicated discussion', id: '2' },
    { name: 'Descriptions and documentation', id: '3' },
  ]);
  const { chatId } = useParams();
  const inputRef = useRef(null);

  const chat = chatList.find((item) => item.id === chatId);

  const onButtonClick = () => {
    let newId = 1;
    if (messages.length > 0) newId = messages[messages.length - 1].id + 1;
    if (author.length > 0) {
      setMessages([...messages, { text: message, author, id: newId }]);
    } else {
      setMessages([...messages, { text: 'Author name needed', author: 'Robot', id: newId }]);
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
      && messages[messages.length - 1].author !== 'Robot'
    ) {
      setTimeout(() => {
        setMessages([...messages, { text: `${author}, your opinion is very important to us`, author: 'Robot', id: messages[messages.length - 1].id + 1 }]);
      }, 1500);
    }
    focusTextField(inputRef.current);
  }, [messages, author]);

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={3} sx={{ margin: '10px 0 0' }}>
        <Grid item xs={2}>
          <Typography variant="h5" component="div" color="primary">Chat list</Typography>
          <List sx={{ margin: '10px 0 10px 0', width: '100%', bgcolor: 'background.paper' }}>
            {chatList.map((item) => <Chats name={item.name} key={item.id} id={item.id} />)}
          </List>
        </Grid>
        {
          chat !== undefined
            ? (
              <Grid item>
                <Box
                  component="form"
                  sx={{
                    m: 1, borderRadius: '10px', gap: '10px', width: '400px', margin: '10px', padding: '15px', backgroundColor: '#fff',
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <Typography variant="h5" component="div" color="primary">Messages</Typography>
                  <TextField
                    sx={{ margin: '10px 0 10px 0', backgroundColor: '#fff' }}
                    id="outlined-multiline-flexible"
                    fullWidth
                    label="Author name"
                    multiline
                    maxRows={4}
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
                    multiline
                    maxRows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <Button sx={{ margin: '10px 0 10px 0' }} variant="outlined" size="large" fullWidth onClick={onButtonClick}>
                    SEND MESSAGE
                  </Button>
                </Box>
                {messages.map((item) => (
                  <Message author={item.author} text={item.text} key={item.id} />
                ))}
              </Grid>
            )
            : 'Chat not found'
        }
      </Grid>
    </ThemeProvider>
  );
}

export default ChatsPage;
