import React from 'react';

import './UsersList.scss';
import UserCard from './UserCard';

const UsersList = ({ users }) => {
  return (
    <div className="UsersList">
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
};

export default UsersList;
