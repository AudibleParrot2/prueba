
import React from 'react';
import { useSelector } from 'react-redux';
import TodoForm from './TodoForm';

const Todos = () => {
  const todos = useSelector(state => state.todos.todos);

  return (
    <div>
      <h3>Tareas</h3>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title} {todo.completed ? '(Completado)' : '(Pendiente)'}</li>
        ))}
      </ul>
      <TodoForm />
    </div>
  );
};

export default Todos;
