import React from "react";
import { FormGroup, Label } from "reactstrap";
import { Field } from "formik";
import { plantTemperatureOptions } from "constants/PlantConstants";
import PlantasticSelect from "components/shared/form/PlantasticSelect";
import PlantFormFields from 'components/plants/plant-form/constants/PlantFormFields';

const PlantFormTemperature = (props) => {
  const plantTemperatureId = "plantTemperature";
  return (
    <FormGroup>
      <Label for={ plantTemperatureId }>Temperature:</Label>
      <Field
        component={ PlantasticSelect }
        id={ plantTemperatureId }
        items={ plantTemperatureOptions }
        name={ PlantFormFields.REQUIRED_TEMPERATURE }
      />
    </FormGroup>
  );
};

PlantFormTemperature.propTypes = {};

export default PlantFormTemperature;
