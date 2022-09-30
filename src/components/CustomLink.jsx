import React from 'react';
import PropTypes from 'prop-types';
import { Link, useMatch } from 'react-router-dom';

function CustomLink({ to, children }) {
  const match = useMatch(to);
  return (
    <Link to={to} style={{ color: match ? 'red' : 'black' }}>
      {children}
    </Link>
  );
}

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default CustomLink;
