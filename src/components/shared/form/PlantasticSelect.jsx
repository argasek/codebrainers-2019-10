import React from "react";
import { CustomInput, FormFeedback } from "reactstrap";

const PlantasticSelect = React.memo(
  ({ field, form: { touched, errors }, ...props }) => {
    return (
      <CustomInput
        type="select"
        invalid={ !!(touched[field.name] && errors[field.name]) }
        { ...field }
        { ...props }
      >
        { props.children }
        { props.items.map((item) => (
          <option value={ item.id } key={ item.id }>
            { item.name }
          </option>
        )) }
        { touched[field.name] && errors[field.name] && (
          <FormFeedback>{ errors[field.name] }</FormFeedback>
        ) }
      </CustomInput>
    );
  }
);

export default PlantasticSelect;
