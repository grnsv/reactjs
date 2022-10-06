import React, { useContext } from 'react';
import { Button } from '@mui/material';
import CustomLink from './CustomLink';
import { ThemeContext } from '../context';

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header style={{
      display: 'flex', justifyContent: 'space-between', background: theme.background, color: theme.textColor,
    }}
    >
      <nav style={{ display: 'flex' }}>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/blog">Blog</CustomLink>
        <CustomLink to="/profile">Profile</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </nav>
      <nav style={{ display: 'flex' }}>
        <Button onClick={toggleTheme}>Light</Button>
        <Button onClick={toggleTheme}>Dark</Button>
      </nav>
    </header>
  );
}

export default Header;
