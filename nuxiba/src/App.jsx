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
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        {/* Encierra la lista de usuarios en un contenedor con borde rojo */}
        <div className="user-list-container">
          <UserList />
        </div>

        {/* Detalles del usuario */}
        <UserDetails />
      </div>

      <div style={{ display: 'flex', gap: '20px', marginTop: '20px', justifyContent: 'center' }}>
        {/* Posts del usuario seleccionado */}
        <Posts />

        {/* Tareas del usuario seleccionado */}
        <Todos />
      </div>
    </div>
  );
};

export default App;
