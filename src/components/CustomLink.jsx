import React from 'react';
import PropTypes from 'prop-types';
import { Link, useMatch } from 'react-router-dom';
import { Button } from '@mui/material';

function CustomLink({ to, children }) {
  const match = useMatch(to);
  return (
    <Link to={to} style={{ display: 'block', textDecoration: 'none', color: match ? 'red' : 'black' }}>
      <Button variant={match ? 'contained' : 'outlined'}>{children}</Button>
    </Link>
  );
}

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default CustomLink;
