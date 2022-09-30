import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from './CustomLink';

function Layout() {
  return (
    <>
      <header>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/blog">Blog</CustomLink>
        <CustomLink to="/chats/1">Chats</CustomLink>
        <CustomLink to="/profile">Profile</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        Footer
      </footer>
    </>
  );
}

export default Layout;
