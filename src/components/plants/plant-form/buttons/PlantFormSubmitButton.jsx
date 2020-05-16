import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';

const PlantFormSubmitButton = ({ label, disabled }) => {
  return (
    <Button color="primary" type="submit" disabled={ disabled }>
      <FontAwesomeIcon icon={ faSave } className="mr-2" />
      <span className="font-weight-semibold">{ label }</span>
    </Button>
  );
};

PlantFormSubmitButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};

export default PlantFormSubmitButton;
