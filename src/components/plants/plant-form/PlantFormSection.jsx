import React from 'react';
import PropTypes from 'prop-types';

const PlantFormSection = ({ children, className = "mb-4" }) => (
  <section className={ className }>
    { children }
  </section>
);

PlantFormSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlantFormSection;
