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
      <h1>Prueba App</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        {/* Listado de usuarios */}
        <div>
          <UserList />
        </div>

        {/* Detalles del usuario seleccionado */}
        <div>
          <UserDetails />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        {/* Posts del usuario seleccionado */}
        <div>
          <Posts />
        </div>

        {/* Tareas del usuario seleccionado */}
        <div>
          <Todos />
        </div>
      </div>
    </div>
  );
};

export default App;
