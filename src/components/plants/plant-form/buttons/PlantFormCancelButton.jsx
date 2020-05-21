import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Routes from 'constants/Routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';

const PlantFormCancelButton = ({ label, mobileLabel }) => {
  return (
    <Button color="secondary" type="button" className="mr-0 mr-md-2" tag={ Link } to={ Routes.PLANTS }>
      <FontAwesomeIcon icon={ faCaretLeft } className="mr-2" />
      <span className="d-inline d-sm-none">{ mobileLabel }</span>
      <span className="d-none d-sm-inline">{ label }</span>
    </Button>
  );
};

PlantFormCancelButton.propTypes = {
  label: PropTypes.string.isRequired,
  mobileLabel: PropTypes.string.isRequired,
};

export default PlantFormCancelButton;
