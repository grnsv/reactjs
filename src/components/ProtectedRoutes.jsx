import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { userSelector } from '../redux/firebase/selectors';
import LoadingToRedirect from './LoadingToRedirect';

function ProtectedRoutes({ children }) {
  const user = useSelector(userSelector);

  if (!user) {
    return <LoadingToRedirect />;
  }
  return children;
}

ProtectedRoutes.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default ProtectedRoutes;
