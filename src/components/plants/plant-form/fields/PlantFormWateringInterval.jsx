import React from "react";
import { FormText, Label } from "reactstrap";
import { Field } from "formik";
import PlantasticInput from 'components/shared/form/PlantasticInput';
import PlantFormFields from 'components/plants/plant-form/constants/PlantFormFields';

const PlantFormWateringInterval = (props) => {
  const plantWateringIntervalId = "plantWateringInterval";
  return (
    <React.Fragment>
      <Label for={ plantWateringIntervalId }>Watering interval:</Label>
      <Field
        component={ PlantasticInput }
        id={ plantWateringIntervalId }
        name={ PlantFormFields.WATERING_INTERVAL }
        placeholder="1"
        type="number"
      />
      <FormText color="muted">
        Number of days
      </FormText>
    </React.Fragment>
  );
};

PlantFormWateringInterval.propTypes = {};

export default PlantFormWateringInterval;
