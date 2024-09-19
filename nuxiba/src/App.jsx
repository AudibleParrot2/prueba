// src/App.jsx
import React from 'react';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import Posts from './components/Posts';
import Todos from './components/Todos';
import './App.css';

const App = () => {
  return (
    <div>
      <h1>NuxibaTechnologies Test</h1>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <div className="user-list-container">
          <UserList />
        </div>

        <UserDetails />
      </div>

      <div style={{ display: 'flex', gap: '20px', marginTop: '20px', justifyContent: 'center' }}>
        <Posts />

        <Todos />
      </div>
    </div>
  );
};

export default App;
