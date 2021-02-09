import React from 'react';
import { useParams, Link } from 'react-router-dom';

import './UserInfo.scss';
import UserCard from '../Users/components/UserCard';
import useAsync from '../shared/hooks/useAsync';
import UsersApiService from '../shared/services/UsersApiService';
import ContentLoader from '../shared/components/ContentLoader';

const UserInfo = () => {
  const { id } = useParams();
  const { data, loading } = useAsync(() => UsersApiService.getOneById(id));

  return (
    <div className="UserInfo">
      <Link className="UserInfo__btn" to="/">
        Go back
      </Link>

      <ContentLoader isLoading={loading}>
        {data && <UserCard {...data.data} />}
      </ContentLoader>
    </div>
  );
};

export default UserInfo;
