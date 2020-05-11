import React from "react";
import { CustomInput, FormFeedback } from "reactstrap";
import { FormikApiErrors } from 'components/shared/form/FormikApiErrors';

const PlantasticSelect = React.memo(
  ({ field, form, ...props }) => {
    const error = FormikApiErrors.getError(field.name, form);
    const invalid = !!error;

    return (
      <CustomInput
        type="select"
        invalid={ invalid }
        { ...field }
        { ...props }
      >
        { props.children }
        { props.items.map((item) => (
          <option value={ item.id } key={ item.id }>
            { item.name }
          </option>
        )) }
        { invalid && <FormFeedback>{ error }</FormFeedback> }
      </CustomInput>
    );
  }
);

export default PlantasticSelect;
