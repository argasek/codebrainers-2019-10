import React from "react";
import { FormGroup, Label } from "reactstrap";
import { Field } from "formik";
import PlantasticInput from 'components/shared/form/PlantasticInput';

const PlantFormName = (props) => {
  const plantNameId = "plantName";
  return (
    <FormGroup>
      <Label for={ plantNameId }>
        Plant name:
        <span className="asterisk" />
      </Label>
      <Field
        component={ PlantasticInput }
        id={ plantNameId }
        name="name"
        placeholder="Monstera Deliciosa"
        type="text"
      />
    </FormGroup>
  );
};

PlantFormName.propTypes = {};

export default PlantFormName;
