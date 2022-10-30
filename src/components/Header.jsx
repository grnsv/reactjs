import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { userSelector } from '../redux/firebase/selectors';
import { logoutInitiate } from '../redux/firebase/firebaseReducer';
import CustomLink from './CustomLink';
import { ThemeContext } from '../context';

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const navigate = useNavigate();

  const handleOut = () => {
    if (user) {
      dispatch(logoutInitiate());
    }
    setTimeout(() => navigate('/login'), 3000);
  };

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header style={{
      display: 'flex', justifyContent: 'space-between', background: theme.background, color: theme.textColor,
    }}
    >
      <nav style={{ display: 'flex' }}>
        {user
          ? <CustomLink to="/">Home</CustomLink>
          : (
            <>
              <CustomLink to="/login">Login</CustomLink>
              <CustomLink to="/register">Register</CustomLink>
            </>
          )}
        <CustomLink to="/blog">Blog</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        {user
          ? (
            <>
              <CustomLink to="/profile">Profile</CustomLink>
              <div>
                <Button variant="outlined" onClick={handleOut}>Logout</Button>
              </div>
            </>
          )
          : null}
      </nav>
      <nav style={{ display: 'flex' }}>
        <Button onClick={toggleTheme}>Change theme</Button>
      </nav>
    </header>
  );
}

export default Header;
