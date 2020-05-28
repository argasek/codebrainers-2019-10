import React from "react";
import { FormGroup, Label } from "reactstrap";
import { Field } from "formik";
import PlantasticInput from 'components/shared/form/PlantasticInput';
import { PlantFormFields } from 'components/plants/plant-form/constants/PlantFormFields';
import PlantFormTextInDays from 'components/plants/plant-form/shared/PlantFormTextInDays';

const PlantFormFertilizingInterval = (props) => {
  const id = "plantFertilizingInterval";
  return (
    <FormGroup>
      <Label for={ id } className="required">Fertilizing interval:</Label>
      <Field
        component={ PlantasticInput }
        id={ id }
        name={ PlantFormFields.FERTILIZING_INTERVAL }
        placeholder="1"
        type="number"
      />
      <PlantFormTextInDays />
    </FormGroup>
  );
};

PlantFormFertilizingInterval.propTypes = {};

export default PlantFormFertilizingInterval;
