import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerInitiate } from '../redux/firebase/firebaseReducer';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [displayName, setDisplayName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return;
    }
    dispatch(registerInitiate(email, password, displayName));
    navigate('/');
  };

  return (
    <div>
      <h2>Register</h2>
      <form>
        <input type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
        <input type="submit" value="Sign Up" onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default RegisterPage;
