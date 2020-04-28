import emoji from 'react-easy-emoji';
import PlantHumidity from 'models/PlantHumidity';
import PropTypes from 'prop-types';
import emojiOptions from 'constants/EmojiOptions';
import times from 'lodash-es/times';

const dropletEmoji = () => emoji('\u{1F4A7}', emojiOptions);

/**
 *
 * @param {PlantHumidity} plantHumidity
 * @returns {React.ReactElement[]}
 * @constructor
 */
const PlantHumidityIcon = ({ plantHumidity }) => times(plantHumidity.value, dropletEmoji);

PlantHumidityIcon.propTypes = {
  plantHumidity: PropTypes.instanceOf(PlantHumidity).isRequired,
};

export default PlantHumidityIcon;

