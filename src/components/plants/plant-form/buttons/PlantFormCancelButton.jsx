import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Routes from 'constants/Routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';

const PlantFormCancelButton = ({ label }) => {
  return (
    <Button color="secondary" outline={ true } type="button" className="mr-0 mr-md-2" tag={ Link } to={ Routes.PLANTS }>
      <FontAwesomeIcon icon={ faCaretLeft } className="mr-2" />
      { label }
    </Button>
  );
};

PlantFormCancelButton.propTypes = {
  label: PropTypes.string.isRequired,
};

export default PlantFormCancelButton;
