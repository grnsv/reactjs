import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar, Button, ListItem, ListItemAvatar, ListItemButton, ListItemText,
} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';

function ChatItem({ name, id, handleDelete }) {
  return (
    <ListItem disablePadding sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Link to={`/chat/${id}`}>
        <ListItemButton>
          <ListItemAvatar><Avatar><FolderIcon /></Avatar></ListItemAvatar>
          <ListItemText primary={name} />
        </ListItemButton>
      </Link>
      <Button
        sx={{ margin: '10px 0 10px 0' }}
        variant="outlined"
        size="large"
        onClick={() => handleDelete(id)}
      >
        X
      </Button>
    </ListItem>
  );
}

ChatItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ChatItem;
