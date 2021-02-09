import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Pagination.scss';
import getArrayOfNumbers from './utils/getArrayNumbers';
import PaginationList from './components/PaginationList';

const Pagination = ({ totalPages, onChangePage, currentActivePage }) => {
  const pageNumbers = useMemo(() => getArrayOfNumbers(totalPages), [
    totalPages,
  ]);

  const isHideRightArrow = useMemo(() => currentActivePage + 1 > totalPages, [
    currentActivePage,
    totalPages,
  ]);

  const isHideLeftArrow = useMemo(() => currentActivePage - 1 < 1, [
    currentActivePage,
  ]);

  const onRight = () => onChangePage(currentActivePage + 1);

  const onLeft = () => onChangePage(currentActivePage - 1);

  return (
    <div className="Pagination">
      <i
        className={classnames('Pagination__arrowLeft', {
          'Pagination__arrowLeft-hide': isHideLeftArrow,
        })}
        onClick={onLeft}
      />

      <PaginationList
        pageNumbers={pageNumbers}
        activePageNumber={currentActivePage}
      />

      <i
        className={classnames('Pagination__arrowRight', {
          'Pagination__arrowRight-hide': isHideRightArrow,
        })}
        onClick={onRight}
      />
    </div>
  );
};

Pagination.propTypes = {
  currentActivePage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
};

export default Pagination;
