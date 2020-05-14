import PropTypes from 'prop-types';
import { categoriesPropType } from 'proptypes/CategoriesPropTypes';
import { roomsPropType } from 'proptypes/RoomsPropTypes';
import { plantsPropType } from 'proptypes/PlantsPropTypes';

const plantListPropTypes = {
  categories: categoriesPropType,
  onEdit: PropTypes.func.isRequired,
  plants: plantsPropType,
  plantsErrorMessage: PropTypes.string,
  plantsInProgress: PropTypes.bool.isRequired,
  plantsSuccess: PropTypes.bool,
  rooms: roomsPropType,
  success: PropTypes.bool,
};

export { plantListPropTypes };