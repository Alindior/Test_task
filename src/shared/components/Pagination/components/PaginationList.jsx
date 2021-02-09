import React from 'react';
import PropTypes from 'prop-types';
import PaginationItem from './PaginationItem';

const PaginationList = ({ pageNumbers, activePageNumber }) =>
  pageNumbers.map((pageNumber) => (
    <PaginationItem
      key={pageNumber}
      pageNumber={pageNumber}
      activePageNumber={activePageNumber}
    />
  ));

PaginationList.propTypes = {
  pageNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
  activePageNumber: PropTypes.number.isRequired,
};

export default PaginationList;
