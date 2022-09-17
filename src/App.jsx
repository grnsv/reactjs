import React, { useEffect, useState } from 'react';

// components
import {
  Button, List, TextField, Typography,
} from '@mui/material';
import Message from './Components/Message';

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

  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Write message here:
      </Typography>
      <form
        onSubmit={handleSubmit}
      >
        <TextField
          name="message"
          variant="standard"
        />
        <Button
          type="submit"
          variant="contained"
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
    </>
  );
}

export default App;
