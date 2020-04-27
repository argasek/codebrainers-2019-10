import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

const OperationFailed = ({ isFailed, children, showIcon }) => {
  return isFailed &&
    <Alert color="danger">
      { showIcon && <FontAwesomeIcon icon={ faExclamationTriangle } /> }
      { ' ' }
      { children }
    </Alert>;
};

OperationFailed.defaultProps = {
  showIcon: true
};

OperationFailed.propTypes = {
  isFailed: PropTypes.bool.isRequired,
  label: PropTypes.string,
};

export default OperationFailed;