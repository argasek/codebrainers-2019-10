import emoji from 'react-easy-emoji';
import PlantExposure from 'models/PlantExposure';
import PropTypes from 'prop-types';
import emojiOptions from 'constants/EmojiOptions';

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

