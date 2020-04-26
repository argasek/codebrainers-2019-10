import React from "react";
import { FormGroup, Label } from "reactstrap";
import { Field } from "formik";
import { plantExposureOptions } from "constants/PlantConstants";
import PlantasticSelect from "components/shared/form/PlantasticSelect";

const PlantFormExposure = (props) => {
  const plantExposureId = "plantExposure";
  return (
    <FormGroup>
      <Label for={ plantExposureId }>Exposure:</Label>
      <Field
        component={ PlantasticSelect }
        id={ plantExposureId }
        items={ plantExposureOptions }
        name="exposure"
      />
    </FormGroup>
  );
};

PlantFormExposure.propTypes = {};

export default PlantFormExposure;
