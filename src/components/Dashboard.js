import React from 'react';
import { useHistory } from 'react-router';
import { logout } from '../utils';

export const Dashboard = () => {
const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push('/signin');
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
