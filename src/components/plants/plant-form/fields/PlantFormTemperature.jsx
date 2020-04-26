import React from "react";
import { FormGroup, Label } from "reactstrap";
import { Field } from "formik";
import { plantTemperatureOptions } from "constants/PlantConstants";
import PlantasticSelect from "components/shared/form/PlantasticSelect";

const PlantFormTemperature = (props) => {
  const plantTemperatureId = "plantTemperature";
  return (
    <FormGroup>
      <Label for={ plantTemperatureId }>Temperature:</Label>
      <Field
        component={ PlantasticSelect }
        id={ plantTemperatureId }
        items={ plantTemperatureOptions }
        name="temperature"
      />
    </FormGroup>
  );
};

PlantFormTemperature.propTypes = {};

export default PlantFormTemperature;
