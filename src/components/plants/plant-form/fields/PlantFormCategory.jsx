import React from 'react';
import { FormGroup, Label } from 'reactstrap';
import { Field } from 'formik';
import PlantasticSelect from 'components/shared/form/PlantasticSelect';
import PlantFormFields from 'components/plants/plant-form/constants/PlantFormFields';
import { categoriesPropType } from 'proptypes/CategoriesPropTypes';
import OptionPleaseSelect from 'components/shared/form/OptionPleaseSelect';

const PlantFormCategory = ({ categories }) => {
  const id = 'plantCategory';
  return (
    <FormGroup>
      <Label for={ id }>Type of plant:</Label>
      <Field
        component={ PlantasticSelect }
        required
        id={ id }
        items={ categories }
        name={ PlantFormFields.CATEGORY }
      >
        <OptionPleaseSelect />
      </Field>
    </FormGroup>
  );
};

PlantFormCategory.propTypes = {
  categories: categoriesPropType
};

export default PlantFormCategory;
