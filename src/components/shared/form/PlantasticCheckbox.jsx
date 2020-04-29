import React from 'react';
import { CustomInput } from 'reactstrap';

const PlantasticCheckbox = React.memo(({ field, form: { touched, errors, values, setFieldValue }, ...props }) => {
  return (
    <CustomInput
      { ...props }
      type="checkbox"
      name={ field.name }
      invalid={ !!(touched[field.name] && errors[field.name]) }
      checked={ field.value }
      value={ field.value }
      onChange={ (event, value) => setFieldValue(field.name, !field.value) }
    >
    </CustomInput>
  );
});

export default PlantasticCheckbox;