import PropTypes from 'prop-types';

const categoryPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
});

const categoriesPropTypes = PropTypes.arrayOf(categoryPropType).isRequired;

const fasIconPropType = PropTypes.shape({
  icon: PropTypes.arrayOf(PropTypes.any).isRequired,
  iconName: PropTypes.string.isRequired,
  prefix: PropTypes.string.isRequired,
});

const plantPropTypes = PropTypes.shape({
  blooming: PropTypes.bool.isRequired,
  category: PropTypes.number.isRequired,
  categorySlug: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  fertilizingInterval: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  lastFertilized: PropTypes.string,
  lastWatered: PropTypes.string,
  name: PropTypes.string.isRequired,
  requiredExposure: PropTypes.string.isRequired,
  requiredHumidity: PropTypes.string.isRequired,
  requiredTemperature: PropTypes.string.isRequired,
  room: PropTypes.number,
  url: PropTypes.string.isRequired,
  wateringInterval: PropTypes.number.isRequired,
});

const plantsPropTypes = PropTypes.arrayOf(plantPropTypes).isRequired;

export {
  categoryPropType,
  categoriesPropTypes,
  fasIconPropType,
  plantPropTypes,
  plantsPropTypes,
};