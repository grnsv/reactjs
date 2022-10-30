import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ChatPage from '../pages/ChatPage';
import BlogPage from '../pages/BlogPage';
import ProfilePage from '../pages/ProfilePage';
import AboutPage from '../pages/AboutPage';
import NotFoundPage from '../pages/NotFoundPage';
import ProtectedRoutes from './ProtectedRoutes';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ProtectedRoutes><HomePage /></ProtectedRoutes>} />
        <Route path="/chat/:chatId" element={<ProtectedRoutes><ChatPage /></ProtectedRoutes>} />
        <Route path="/profile" element={<ProtectedRoutes><ProfilePage /></ProtectedRoutes>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
