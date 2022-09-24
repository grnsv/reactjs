import React from 'react';
import PropTypes from 'prop-types';

// components
import {
  IconButton, List, ListItem, ListItemText,
} from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';

function ChatList({
  chatList,
}) {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {chatList.map((chat) => (
        <ListItem
          key={chat.id}
          disableGutters
          secondaryAction={(
            <IconButton aria-label="comment">
              <CommentIcon />
            </IconButton>
          )}
        >
          <ListItemText primary={chat.name} />
        </ListItem>
      ))}
    </List>
  );
}

ChatList.propTypes = {
  chatList: PropTypes.instanceOf(Array).isRequired,
};

export default ChatList;
