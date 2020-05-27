import React from "react";
import { Col, Row } from "reactstrap";
import PropTypes from 'prop-types';
import PlantFormCancelButton from 'components/plants/plant-form/buttons/PlantFormBackToListButton';
import PlantFormSubmitButton from 'components/plants/plant-form/buttons/PlantFormSubmitButton';
import PlantFormResetButton from 'components/plants/plant-form/buttons/PlantFormResetButton';
import PlantFormRemoveButton from 'components/plants/plant-form/buttons/PlantFormRemoveButton';
import { plantInProgressPropType } from 'proptypes/PlantFormPropTypes';
import { PLANT_PROGRESS_REMOVE } from 'ducks/plant/plantSlice';

/**
 * @component
 */
const PlantFormButtons = React.memo((props) => {
  const {
    isSubmitting,
    onRemove,
    plantInProgress,
    submitDisabled,
    submitLabel
  } = props;
  return (
    <React.Fragment>
      <hr className="mb-4 mt-4" />
      <Row form className="mb-2">
        <Col xs={ 4 }>
          <PlantFormCancelButton
            mobileLabel="Back"
            label="Back to the list"
          />
        </Col>
        <Col xs={ 8 } className="mb-0 d-flex flex-row-reverse">
          <PlantFormSubmitButton
            disabled={ submitDisabled }
            isSubmitting={ isSubmitting }
            label={ submitLabel }
          />
          {
            onRemove &&
            <PlantFormRemoveButton
              label="Remove"
              onClick={ onRemove }
              inProgress={ plantInProgress === PLANT_PROGRESS_REMOVE }
            />
          }
          <PlantFormResetButton label="Reset" />
        </Col>
      </Row>
    </React.Fragment>
  );
});

PlantFormButtons.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
  onRemove: PropTypes.func,
  plantInProgress: plantInProgressPropType,
  submitDisabled: PropTypes.bool.isRequired,
  submitLabel: PropTypes.string.isRequired,
};

export default PlantFormButtons;
