import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const ProgressIcon = ({ className = 'mr-sm-2', icon, inProgress, ...rest }) =>
  <FontAwesomeIcon
    className={ className }
    icon={ inProgress ? faCircleNotch : icon }
    spin={ inProgress }
    { ...rest }
  />;

ProgressIcon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOfType([ PropTypes.object, PropTypes.array, PropTypes.string ]),
  inProgress: PropTypes.bool.isRequired,
};

export default ProgressIcon;
