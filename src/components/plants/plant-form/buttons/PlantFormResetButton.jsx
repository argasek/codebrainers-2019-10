import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const PlantFormResetButton = ({ label }) => {
  return (
    <Button color="secondary" type="reset" className="mr-2 d-none d-md-inline-block">
      { label }
    </Button>
  );
};

PlantFormResetButton.propTypes = {
  label: PropTypes.string.isRequired,
};

export default PlantFormResetButton;
