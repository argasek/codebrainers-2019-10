import PropTypes from 'prop-types';

const withPlantPropTypes = {
  createPlant: PropTypes.func.isRequired,
  updatePlant: PropTypes.func.isRequired,
  plantInProgress: PropTypes.bool.isRequired,
};

export {
  withPlantPropTypes
};