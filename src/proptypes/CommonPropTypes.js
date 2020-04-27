import PropTypes from 'prop-types';

const categoryPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
})

const categoriesPropTypes = PropTypes.arrayOf(categoryPropType).isRequired;

const plantPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  category: categoryPropType,
  categorySlug: PropTypes.string.isRequired,
  fertilizingInterval: PropTypes.number.isRequired,
  requiredExposure: PropTypes.string.isRequired,
  requiredHumidity: PropTypes.string.isRequired,
  requiredTemperature: PropTypes.string.isRequired,
  blooming: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  wateringInterval: PropTypes.number.isRequired,
  room: PropTypes.number.isRequired,
  lastWatered: PropTypes.string.isRequired,
  lastFertilized: PropTypes.string.isRequired,
});

const plantsPropTypes = PropTypes.arrayOf(plantPropTypes).isRequired;

export {
  categoryPropType,
  categoriesPropTypes,
  plantPropTypes,
  plantsPropTypes,
};