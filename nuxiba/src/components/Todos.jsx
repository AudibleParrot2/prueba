
import React from 'react';
import { useSelector } from 'react-redux';
import TodoForm from './TodoForm';

const Todos = () => {
  const user = useSelector(state => state.users.selectedUser);
  const todos = useSelector(state => state.todos.todosByUser[user?.id] || []);

  if (!user) {
    return <p>Selecciona un usuario para ver sus tareas.</p>;
  }

  return (
    <div className='todos'>
      <h3>Tareas de {user.name}</h3>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title} {todo.completed ? '(Completado)' : '(Pendiente)'}
          </li>
        ))}
      </ul>
      <TodoForm />
    </div>
  );
};

export default Todos;
