import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const InProgress = ({ inProgress, label }) => {
  return inProgress &&
    <p>
      <FontAwesomeIcon icon={ faSpinner } spin />
      { ' ' }
      { label }
    </p>;
};

InProgress.defaultProps = {
  label: 'Loading data…'
};

InProgress.propTypes = {
  inProgress: PropTypes.bool.isRequired,
  label: PropTypes.string,
};

export default InProgress;