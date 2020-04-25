import React from "react";
import { Label } from "reactstrap";
import { Field } from "formik";
import { plantExposureOptions } from "constants/PlantConstants";
import PlantasticSelect from "components/shared/form/PlantasticSelect";

const PlantFormFieldExposure = (props) => {
  const plantExposureId = "plantExposure";
  return (
    <React.Fragment>
      <Label for={ plantExposureId }>Exposure:</Label>
      <Field
        id={ plantExposureId }
        name="exposure"
        items={ plantExposureOptions }
        component={ PlantasticSelect }
      />
    </React.Fragment>
  );
};

PlantFormFieldExposure.propTypes = {};

export default PlantFormFieldExposure;
