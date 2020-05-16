import React from "react";
import { FormGroup, Label } from "reactstrap";
import { Field } from "formik";
import PlantasticInput from 'components/shared/form/PlantasticInput';
import PlantFormFields from 'components/plants/plant-form/constants/PlantFormFields';

const PlantFormName = (props) => {
  const plantNameId = "plantName";
  return (
    <FormGroup>
      <Label for={ plantNameId } className="required">
        Plant name:
      </Label>
      <Field
        component={ PlantasticInput }
        id={ plantNameId }
        name={ PlantFormFields.NAME }
        placeholder="Monstera Deliciosa"
        type="text"
      />
    </FormGroup>
  );
};

PlantFormName.propTypes = {};

export default PlantFormName;
