import React from "react";
import { FormGroup, Label } from "reactstrap";
import { Field } from "formik";
import { plantTemperatureOptions } from "constants/PlantConstants";
import PlantasticSelect from "components/shared/form/PlantasticSelect";
import { PlantFormFields } from 'components/plants/plant-form/constants/PlantFormFields';
import OptionPleaseSelect from 'components/shared/form/OptionPleaseSelect';

const PlantFormTemperature = (props) => {
  const plantTemperatureId = "plantTemperature";
  return (
    <FormGroup>
      <Label for={ plantTemperatureId } className="required">Temperature:</Label>
      <Field
        component={ PlantasticSelect }
        id={ plantTemperatureId }
        items={ plantTemperatureOptions }
        name={ PlantFormFields.REQUIRED_TEMPERATURE }
        required
      >
        <OptionPleaseSelect />
      </Field>
    </FormGroup>
  );
};

PlantFormTemperature.propTypes = {};

export default PlantFormTemperature;
