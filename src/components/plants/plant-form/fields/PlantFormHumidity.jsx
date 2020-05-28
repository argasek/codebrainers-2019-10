import React from "react";
import { FormGroup, Label } from "reactstrap";
import { Field } from "formik";
import { plantHumidityOptions } from "constants/PlantConstants";
import PlantasticSelect from "components/shared/form/PlantasticSelect";
import { PlantFormFields } from 'components/plants/plant-form/constants/PlantFormFields';
import OptionPleaseSelect from 'components/shared/form/OptionPleaseSelect';

const PlantFormHumidity = (props) => {
  const plantHumidityId = "plantHumidity";
  return (
    <FormGroup>
      <Label for={ plantHumidityId } className="required">Humidity:</Label>
      <Field
        component={ PlantasticSelect }
        id={ plantHumidityId }
        items={ plantHumidityOptions }
        name={ PlantFormFields.REQUIRED_HUMIDITY }
        required
      >
        <OptionPleaseSelect />
      </Field>
    </FormGroup>
  );
};

PlantFormHumidity.propTypes = {};

export default PlantFormHumidity;
