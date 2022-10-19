import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Card, CardContent, Typography,
} from '@mui/material';

function Message({
  id, author, text, handleDelete,
}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div" color="primary">
          {`${author}:`}
        </Typography>
        <Typography variant="body2">
          {`«${text}»`}
        </Typography>
      </CardContent>
      <Button sx={{ margin: '10px 0 10px 0' }} variant="outlined" size="large" onClick={() => handleDelete(id)}>
        DELETE
      </Button>
    </Card>
  );
}

Message.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Message;
