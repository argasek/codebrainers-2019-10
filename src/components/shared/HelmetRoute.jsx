import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Route } from 'react-router-dom';

const HelmetRoute = ({ title, ...rest }) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>{ title }</title>
      </Helmet>
      <Route { ...rest } />
    </React.Fragment>
  );
};

HelmetRoute.propTypes = {
  title: PropTypes.string,
};

export default HelmetRoute;