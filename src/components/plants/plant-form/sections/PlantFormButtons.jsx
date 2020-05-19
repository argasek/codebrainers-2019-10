import React from "react";
import { Col, Row } from "reactstrap";
import PropTypes from 'prop-types';
import PlantFormCancelButton from 'components/plants/plant-form/buttons/PlantFormCancelButton';
import PlantFormSubmitButton from 'components/plants/plant-form/buttons/PlantFormSubmitButton';
import PlantFormResetButton from 'components/plants/plant-form/buttons/PlantFormResetButton';
import PlantFormRemoveButton from 'components/plants/plant-form/buttons/PlantFormRemoveButton';

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
        <Col xs={ 6 }>
          <PlantFormCancelButton label="Back to the list" />
        </Col>
        <Col xs={ 6 } className="mb-0 d-flex flex-row-reverse">
          <PlantFormSubmitButton
            disabled={ submitDisabled }
            isSubmitting={ isSubmitting }
            label={ submitLabel }
          />
          <PlantFormResetButton label="Reset" />
          {
            onRemove &&
            <PlantFormRemoveButton
              label="Remove"
              onClick={ onRemove }
              plantInProgress={ plantInProgress }
            />
          }
        </Col>
      </Row>
    </React.Fragment>
  );
});

PlantFormButtons.propTypes = {
  isSubmitting: PropTypes.bool.isRequired,
  onRemove: PropTypes.func,
  submitDisabled: PropTypes.bool.isRequired,
  submitLabel: PropTypes.string.isRequired,
};

export default PlantFormButtons;
