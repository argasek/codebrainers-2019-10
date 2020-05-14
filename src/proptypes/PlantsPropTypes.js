import PropTypes from 'prop-types';
import Plant from 'models/Plant';
import { categoriesPropType } from 'proptypes/CategoriesPropTypes';
import { roomsPropType } from 'proptypes/RoomsPropTypes';

const plantPropType = PropTypes.instanceOf(Plant).isRequired;
const plantsPropType = PropTypes.arrayOf(plantPropType).isRequired;

const plantPropTypes = {
  categories: categoriesPropType,
  onEdit: PropTypes.func.isRequired,
  plant: plantPropType,
  rooms: roomsPropType,
};

const plantsPropTypes = {
  categories: categoriesPropType,
  onEdit: PropTypes.func.isRequired,
  plants: plantsPropType,
  rooms: roomsPropType,
};

export {
  plantPropType,
  plantPropTypes,
  plantsPropType,
  plantsPropTypes,
};