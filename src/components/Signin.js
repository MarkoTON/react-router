import React from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../utils';

export const Signin = () => {
  const history = useHistory();

  const handleLogin = () => {
    login();
    history.push('/dashboard');
  }

  return (
    <div>
      <h1>Signin</h1>
      <button onClick={handleLogin}>Click to login</button>
    </div>
  )
}
