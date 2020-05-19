import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import ProgressIcon from 'components/shared/ProgressIcon';

const PlantFormRemoveButton = ({ label, onClick, inProgress }) => {
  return (
    <Button color="danger" type="button" className="mr-0 mr-md-2" onClick={ onClick } disabled={ inProgress }>
      <ProgressIcon className="mr-2" icon={ faTrash } inProgress={ inProgress } />
      { label }
    </Button>
  );
};

PlantFormRemoveButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  inProgress: PropTypes.bool.isRequired,
};

export default PlantFormRemoveButton;
