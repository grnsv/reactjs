import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginInitiate } from '../redux/firebase/firebaseReducer';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    dispatch(loginInitiate(email, password));
    navigate('/');
  };
  return (
    <div>
      <h2>Login</h2>
      <form>
        <label htmlFor="email">
          Email
          <input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label htmlFor="password">
          Password
          <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <input type="submit" value="Sign In" onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default LoginPage;
