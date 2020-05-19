import PropTypes from 'prop-types';
import { plantInProgressPropType } from 'proptypes/PlantFormPropTypes';

const withPlantPropTypes = {
  createPlant: PropTypes.func.isRequired,
  plantInProgress: plantInProgressPropType,
  removePlant: PropTypes.func.isRequired,
  updatePlant: PropTypes.func.isRequired,
};

export {
  withPlantPropTypes
};