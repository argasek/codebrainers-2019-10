import React from "react";
import { FormText, Label } from "reactstrap";
import { Field } from "formik";
import PlantasticInput from 'components/shared/form/PlantasticInput';

const PlantFormFertilizingInterval = (props) => {
  const plantFertilizingIntervalId = "plantFertilizingInterval";
  return (
    <React.Fragment>
      <Label for={ plantFertilizingIntervalId }>Fertilizing interval:</Label>
      <Field
        component={ PlantasticInput }
        id={ plantFertilizingIntervalId }
        name="fertilizingInterval"
        placeholder="1"
        type="text"
      />
      <FormText color="muted">
        Number of days
      </FormText>
    </React.Fragment>
  );
};

PlantFormFertilizingInterval.propTypes = {};

export default PlantFormFertilizingInterval;
