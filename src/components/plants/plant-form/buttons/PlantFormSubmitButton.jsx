import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch, faSave } from '@fortawesome/free-solid-svg-icons';

const PlantFormSubmitButton = ({ disabled, isSubmitting, label }) => {
  const icon = isSubmitting ? faCircleNotch : faSave;
  return (
    <Button color="primary" type="submit" disabled={ disabled }>
      <FontAwesomeIcon icon={ icon } className="mr-2" spin={ isSubmitting } />
      <span className="font-weight-semibold">{ label }</span>
    </Button>
  );
};

PlantFormSubmitButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};

export default PlantFormSubmitButton;
