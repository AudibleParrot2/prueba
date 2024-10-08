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
    <div className='user-list'>
      <h2>Usuarios</h2>
      <ul>
        {users.map(user => (
          <li className="user-item"  key={user.id} onClick={() => dispatch(selectUser(user))}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
