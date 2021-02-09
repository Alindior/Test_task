import React from 'react';
import PropTypes from 'prop-types';

import Loader from './Loader';

const ContentLoader = ({ isLoading, children }) => {
  return <>{isLoading ? <Loader /> : children}</>;
};

ContentLoader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default ContentLoader;
