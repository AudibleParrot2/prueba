
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../features/todosSlice';

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(state => state.users.selectedUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) return;

    // Crear el objeto JSON con la información de la nueva tarea, solo en consola
    const newTodo = {
      userId: user.id,
      title: title,
      completed: completed
    };

    dispatch(addTodo(newTodo));

    // Consola
    console.log('New Todo JSON:', JSON.stringify(newTodo, null, 2));

    setTitle('');
    setCompleted(false);
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nueva tarea"
        required
      />
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
        Completada
      </label>
      <button type="submit">Guardar</button>
    </form>
  );
};

export default TodoForm;
