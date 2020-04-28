import PropTypes from 'prop-types';
import moment from 'moment-es6';

const plantPropTypes = PropTypes.shape({
  blooming: PropTypes.bool.isRequired,
  category: PropTypes.number.isRequired,
  categorySlug: PropTypes.string.isRequired,
  difficulty: PropTypes.number.isRequired,
  fertilizingInterval: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  lastFertilized: PropTypes.instanceOf(moment),
  lastWatered: PropTypes.instanceOf(moment),
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
  plantPropTypes,
  plantsPropTypes,
};