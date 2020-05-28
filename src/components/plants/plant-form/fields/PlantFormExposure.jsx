import React from "react";
import { FormGroup, Label } from "reactstrap";
import { Field } from "formik";
import { plantExposureOptions } from "constants/PlantConstants";
import PlantasticSelect from "components/shared/form/PlantasticSelect";
import { PlantFormFields } from 'components/plants/plant-form/constants/PlantFormFields';
import OptionPleaseSelect from 'components/shared/form/OptionPleaseSelect';

const PlantFormExposure = (props) => {
  const plantExposureId = "plantExposure";
  return (
    <FormGroup>
      <Label for={ plantExposureId } className="required">Exposure:</Label>
      <Field
        component={ PlantasticSelect }
        id={ plantExposureId }
        items={ plantExposureOptions }
        name={ PlantFormFields.REQUIRED_EXPOSURE }
        required
      >
        <OptionPleaseSelect />
      </Field>
    </FormGroup>
  );
};

PlantFormExposure.propTypes = {};

export default PlantFormExposure;
