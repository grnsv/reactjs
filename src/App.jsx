import React, { useEffect, useState } from 'react';

// components
import {
  Button, createTheme, Grid, List, TextField, ThemeProvider, Typography,
} from '@mui/material';
import Message from './Components/Message';
import ChatList from './Components/ChatList';

function App() {
  const [messageList, setMessageList] = useState([]);

  const handleSubmit = (e) => {
    const result = [...messageList];
    result.push({
      text: e.target.message.value,
      author: 'User',
    });
    setMessageList(result);
    e.preventDefault();
  };

  useEffect(() => {
    if (
      messageList.length > 0
      && messageList[messageList.length - 1].author !== 'Robot'
    ) {
      setTimeout(() => {
        const result = [...messageList];
        result.push({
          text: 'Ваше мнение очень важно для нас',
          author: 'Robot',
        });
        setMessageList(result);
      }, 1500);
    }
  }, [messageList]);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#FF9800',
      },
      secondary: {
        main: '#0098FF',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <ChatList
            chatList={[
              {
                id: '1',
                name: 'Name1',
              },
              {
                id: '2',
                name: 'Name2',
              },
              {
                id: '3',
                name: 'Name3',
              },
            ]}
          />
        </Grid>
        <Grid item>
          <Typography variant="h4" component="h1" gutterBottom>
            Write message here:
          </Typography>
          <form
            onSubmit={handleSubmit}
          >
            <TextField
              name="message"
              variant="standard"
              autoFocus
            />
            <Button
              type="submit"
              variant="contained"
              style={{
                backgroundColor: theme.palette.primary.main,
                borderColor: theme.palette.secondary.main,
              }}
            >
              Отправить
            </Button>
          </form>
          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {messageList.map((message, index) => (
              <Message
                key={`${message.author}${index.toString()}`}
                message={message}
              />
            ))}
          </List>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
