import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, selectUser } from '../features/usersSlice';

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h2>Usuarios</h2>
      <ul>
        {users.map(user => (
          <li key={user.id} onClick={() => dispatch(selectUser(user))}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
