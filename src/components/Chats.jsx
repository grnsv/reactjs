import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar, ListItem, ListItemAvatar, ListItemButton, ListItemText,
} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';

function Chats({ name, id }) {
  return (
    <ListItem disablePadding>
      <Link to={`/chats/${id}`}>
        <ListItemButton>
          <ListItemAvatar><Avatar><FolderIcon /></Avatar></ListItemAvatar>
          <ListItemText primary={name} />
        </ListItemButton>
      </Link>
    </ListItem>
  );
}

Chats.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Chats;
