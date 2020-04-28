import PropTypes from 'prop-types';

const fasIconPropType = PropTypes.shape({
  icon: PropTypes.arrayOf(PropTypes.any).isRequired,
  iconName: PropTypes.string.isRequired,
  prefix: PropTypes.string.isRequired,
});

export {
  fasIconPropType,
};