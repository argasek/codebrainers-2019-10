import emoji from 'react-easy-emoji';
import PropTypes from 'prop-types';
import emojiOptions from 'constants/EmojiOptions';

const bloomingEmoji = '\u{1F338}';

/**
 *
 * @param {boolean} plantBlooming
 * @returns {React.ReactElement}
 * @constructor
 */
const PlantBloomingIcon = ({ plantBlooming }) => plantBlooming && emoji(bloomingEmoji, emojiOptions);

PlantBloomingIcon.propTypes = {
  plantBlooming: PropTypes.bool.isRequired,
};

export default PlantBloomingIcon;

