import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './PaginationItem.scss';

const PaginationItem = ({ pageNumber, activePageNumber }) => {
  const isActive = useMemo(() => pageNumber === activePageNumber, [
    activePageNumber,
    pageNumber,
  ]);

  return (
    <div
      className={classnames('PaginationItem', {
        'PaginationItem-active': isActive,
      })}
    >
      {pageNumber}
    </div>
  );
};

PaginationItem.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  activePageNumber: PropTypes.number.isRequired,
};

export default PaginationItem;
