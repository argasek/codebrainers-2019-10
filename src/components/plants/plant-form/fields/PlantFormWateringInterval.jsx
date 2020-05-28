import React from "react";
import { FormGroup, Label } from "reactstrap";
import { Field } from "formik";
import PlantasticInput from 'components/shared/form/PlantasticInput';
import { PlantFormFields } from 'components/plants/plant-form/constants/PlantFormFields';
import PlantFormTextInDays from 'components/plants/plant-form/shared/PlantFormTextInDays';

const PlantFormWateringInterval = (props) => {
  const id = "plantWateringInterval";
  return (
    <FormGroup>
      <Label for={ id } className="required">Watering interval:</Label>
      <Field
        component={ PlantasticInput }
        id={ id }
        name={ PlantFormFields.WATERING_INTERVAL }
        placeholder="1"
        type="number"
      />
      <PlantFormTextInDays />
    </FormGroup>
  );
};

PlantFormWateringInterval.propTypes = {};

export default PlantFormWateringInterval;
