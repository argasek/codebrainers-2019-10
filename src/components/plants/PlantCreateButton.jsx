import React from 'react';
import { Button } from 'reactstrap';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Routes from 'constants/Routes';
import { Link } from 'react-router-dom';

const PlantCreateButton = () => {
  return (
    <Button color="primary" tag={ Link } to={ Routes.PLANTS_CREATE }>
      <FontAwesomeIcon icon={ faPlusCircle } />
      { ' ' }
      Create new plant
    </Button>
  );
};

PlantCreateButton.propTypes = {};

export default PlantCreateButton;
