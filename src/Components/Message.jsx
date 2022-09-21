import React from 'react';
import PropTypes from 'prop-types';

// components
import {
  Divider, ListItem, ListItemText, Typography,
} from '@mui/material';

function Message({
  message,
}) {
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={message.author}
          secondary={(
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {message.text}
            </Typography>
          )}
        />
      </ListItem>
      <Divider component="li" />
    </>
  );
}

Message.propTypes = {
  message: PropTypes.instanceOf(Object).isRequired,
};

export default Message;
