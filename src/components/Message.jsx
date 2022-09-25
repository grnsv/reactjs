import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography } from '@mui/material';

function Message({ author, text }) {
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
    </Card>
  );
}

Message.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Message;
