import React from "react";
import { FormText, Label } from "reactstrap";
import { Field } from "formik";
import PlantasticInput from 'components/shared/form/PlantasticInput';

const PlantFormWateringInterval = (props) => {
  const plantWateringIntervalId = "plantWateringInterval";
  return (
    <React.Fragment>
      <Label for={ plantWateringIntervalId }>Watering interval:</Label>
      <Field
        component={ PlantasticInput }
        id={ plantWateringIntervalId }
        name="wateringInterval"
        placeholder="1"
        type="text"
      />
      <FormText color="muted">
        Number of days
      </FormText>
    </React.Fragment>
  );
};

PlantFormWateringInterval.propTypes = {};

export default PlantFormWateringInterval;
