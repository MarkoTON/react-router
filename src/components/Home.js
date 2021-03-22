import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { isLogin, logout } from '../utils';

export const Home = () => {
  const [login, setLogin] = useState(isLogin());

  const handleLogout = () => {
    logout();
    setLogin(false);
  }

  return (
    <div>
      <h1>Home</h1>
      { login ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <Link to="/signin">Go to signin page</Link>
      ) }
    </div>
  )
}
