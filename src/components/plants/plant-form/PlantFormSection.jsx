import React from 'react';
import PropTypes from 'prop-types';

const PlantFormSection = ({ children }) => (
  <section className="mb-4">
    { children }
  </section>
);

PlantFormSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlantFormSection;
