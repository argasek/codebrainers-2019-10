import React from 'react';
import { FormGroup, FormText, Label } from 'reactstrap';
import { Field } from 'formik';
import PlantasticSelect from 'components/shared/form/PlantasticSelect';
import { PlantFormFields } from 'components/plants/plant-form/constants/PlantFormFields';
import { categoriesPropType } from 'proptypes/CategoriesPropTypes';
import OptionPleaseSelect from 'components/shared/form/OptionPleaseSelect';
import { Link } from 'react-router-dom';
import Routes from 'constants/Routes';

const PlantFormCategory = ({ categories }) => {
  const id = 'plantCategory';
  return (
    <FormGroup>
      <Label for={ id } className="required">Category:</Label>
      <Field
        component={ PlantasticSelect }
        required
        id={ id }
        items={ categories }
        name={ PlantFormFields.CATEGORY }
      >
        <OptionPleaseSelect />
      </Field>
      <FormText>
        Your plant doesn't fit any? <Link to={ Routes.CATEGORIES } target="_blank">Add category…</Link>
      </FormText>
    </FormGroup>
  );
};

PlantFormCategory.propTypes = {
  categories: categoriesPropType
};

export default PlantFormCategory;
