import React from 'react';
import { FormGroup } from 'reactstrap';
import { Field } from 'formik';
import PlantasticCheckbox from 'components/shared/form/PlantasticCheckbox';

const PlantFormBlooming = (props) => {
  const htmlId = "plantBlooming";
  return (
    <FormGroup tag="fieldset">
      <legend className="legend-form-label">
        Blooming:
      </legend>
      <Field
        component={ PlantasticCheckbox }
        id={ htmlId }
        name="blooming"
        label="Yup!"
      />
    </FormGroup>
  );
};

PlantFormBlooming.propTypes = {};

export default PlantFormBlooming;
