import React from 'react';
import { CustomInput, FormFeedback } from "reactstrap";

const PlantasticInputCustom = React.memo(({ field, form: { touched, errors }, ...props }) => {
  return (
    <CustomInput invalid={ !!(touched[field.name] && errors[field.name]) } { ...field } { ...props }>
      { touched[field.name] && errors[field.name] && <FormFeedback>{ errors[field.name] }</FormFeedback> }
    </CustomInput>
  );
});

export default PlantasticInputCustom;