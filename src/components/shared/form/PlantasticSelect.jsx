import React from "react";
import { CustomInput, FormFeedback } from "reactstrap";
import { FormikApiErrors } from 'components/shared/form/FormikApiErrors';

const PlantasticSelect = React.memo(
  ({ field, form, ...props }) => {
    const error = FormikApiErrors.getError(field.name, form);
    const invalid = !!error;

    return (
      <React.Fragment>
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
        </CustomInput>
        { invalid && <FormFeedback>{ error }</FormFeedback> }
      </React.Fragment>
    );
  }
);

export default PlantasticSelect;
