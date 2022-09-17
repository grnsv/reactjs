import React from 'react';
import PropTypes from 'prop-types';

function Message({
  message,
}) {
  return (
    <p>
      {message}
    </p>
  );
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Message;
