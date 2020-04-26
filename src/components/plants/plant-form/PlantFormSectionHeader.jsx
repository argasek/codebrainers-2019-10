import React from 'react';
import PropTypes from 'prop-types';

const PlantFormSectionHeader = ({ children }) => (
  <React.Fragment>
    <h5 className="mb-3">{ children }</h5>
  </React.Fragment>
);

PlantFormSectionHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlantFormSectionHeader;
