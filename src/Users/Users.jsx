import React, { useState } from 'react';

import UsersApiService from '../shared/services/UsersApiService';
import useAsync from '../shared/hooks/useAsync';
import UsersList from './components/UsersList';

import './Users.scss';
import Pagination from '../shared/components/Pagination/Pagination';
import ContentLoader from '../shared/components/ContentLoader';

const Users = () => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const { data, loading } = useAsync(
    () => UsersApiService.getAllUsers(currentPageNumber),
    currentPageNumber
  );

  const onPageChange = (page) => setCurrentPageNumber(page);

  return (
    <div className="Users">
      <ContentLoader isLoading={loading}>
        {data && (
          <>
            <Pagination
              totalPages={data.total_pages}
              onChangePage={onPageChange}
              currentActivePage={currentPageNumber}
            />

            <UsersList users={data.data} />
          </>
        )}
      </ContentLoader>
    </div>
  );
};

export default Users;
