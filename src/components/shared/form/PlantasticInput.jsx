import React from 'react';
import { FormFeedback, Input } from "reactstrap";

const PlantasticInput = React.memo(({ field, form: { touched, errors }, ...props }) => (
  <React.Fragment>
    <Input
      invalid={!!(touched[field.name] && errors[field.name])}
      { ...field }
      { ...props }
    />
    {touched[field.name] && errors[field.name] && <FormFeedback>{errors[field.name]}</FormFeedback>}
  </React.Fragment>
));

export default PlantasticInput;