import React from 'react';
import { useHistory } from 'react-router-dom';

import './UserCard.scss';

const UserCard = ({ first_name, last_name, email, avatar, id }) => {
  const history = useHistory();

  const onClick = () => history.push(`/users/${id}`);

  return (
    <div className="UserCard" onClick={onClick}>
      <img className="UserCard__ava" src={avatar} alt="avatar" />

      <div className="UserCard__info">
        <div className="UserCard__info-item">Name: {first_name}</div>

        <div className="UserCard__info-item">Surname: {last_name}</div>

        <div className="UserCard__info-item">Email: {email}</div>
      </div>
    </div>
  );
};

export default UserCard;
