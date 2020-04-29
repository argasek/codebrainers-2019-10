import React from "react";
import { FormGroup, Label } from "reactstrap";
import { Field } from "formik";
import { plantHumidityOptions } from "constants/PlantConstants";
import PlantasticSelect from "components/shared/form/PlantasticSelect";
import PlantFormFields from 'components/plants/plant-form/constants/PlantFormFields';

const PlantFormHumidity = (props) => {
  const plantHumidityId = "plantHumidity";
  return (
    <FormGroup>
      <Label for={ plantHumidityId }>Humidity:</Label>
      <Field
        component={ PlantasticSelect }
        id={ plantHumidityId }
        items={ plantHumidityOptions }
        name={ PlantFormFields.REQUIRED_HUMIDITY }
      />
    </FormGroup>
  );
};

PlantFormHumidity.propTypes = {};

export default PlantFormHumidity;
