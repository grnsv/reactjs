import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import BlogPage from '../pages/BlogPage';
import ChatsPage from '../pages/ChatsPage';
import ProfilePage from '../pages/ProfilePage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import Layout from './Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/chats/:chatId" element={<ChatsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
