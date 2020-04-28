import emoji from 'react-easy-emoji';
import PlantExposure from 'models/PlantExposure';
import PropTypes from 'prop-types';

const emojiOptions = {
  baseUrl: 'https://twemoji.maxcdn.com/2/svg/',
  ext: '.svg',
  size: ''
};

/**
 *
 * @param {PlantExposure} plantExposure
 * @returns {React.ReactElement}
 * @constructor
 */
const PlantExposureIcon = ({ plantExposure }) => emoji(plantExposure.emoji, emojiOptions);

PlantExposureIcon.propTypes = {
  plantExposure: PropTypes.instanceOf(PlantExposure).isRequired,
};

export default PlantExposureIcon;

