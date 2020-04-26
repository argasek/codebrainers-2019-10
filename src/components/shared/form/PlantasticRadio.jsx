import React from 'react';
import { CustomInput, FormFeedback } from 'reactstrap';

const PlantasticRadio = React.memo(({ field, form: { touched, errors, values, setFieldValue }, ...props }) => {
  return (
    <CustomInput
      { ...props }
      type="radio"
      name={ field.name }
      invalid={ !!(touched[field.name] && errors[field.name]) }
      checked={ values[field.name] === field.value }
      value={ field.value }
      onChange={ (event, value) => setFieldValue(field.name, field.value) }
    >
      { touched[field.name] && errors[field.name] && <FormFeedback>{ errors[field.name] }</FormFeedback> }
    </CustomInput>
  );
});

export default PlantasticRadio;