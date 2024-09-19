import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../features/postsSlice';
import { fetchTodos } from '../features/todosSlice';

const UserDetails = () => {
  const user = useSelector(state => state.users.selectedUser);
  const dispatch = useDispatch();

  if (!user) return <p>Selecciona un usuario</p>;

  return (
    <div className='user-details'>
      <h3>{user.name} ({user.username})</h3>
      <p>Email: {user.email}</p>
      <button onClick={() => dispatch(fetchPosts(user.id))}>Ver Posts</button>
      <button onClick={() => dispatch(fetchTodos(user.id))}>Ver Todos</button>
    </div>
  );
};

export default UserDetails;
