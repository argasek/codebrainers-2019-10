import React from 'react';
import { FormGroup, FormText } from 'reactstrap';
import { Field } from 'formik';
import { plantDifficultyOptions } from 'constants/PlantConstants';
import PlantasticRadioNoFeedback from 'components/shared/form/PlantasticRadioNoFeedback';
import PlantFormFields from 'components/plants/plant-form/constants/PlantFormFields';

const plantDifficultyId = "plantDifficulty";
const plantDifficultyName = PlantFormFields.DIFFICULTY;

const plantDifficultyOption = (item) => (
  <Field
    id={ plantDifficultyId + item.id }
    key={ item.id }
    value={ item.id }
    name={ plantDifficultyName }
    type="radio"
    label={ item.name }
    component={ PlantasticRadioNoFeedback }
    className="custom-control-inline-responsive"
  />
);

const getDescription = (value) => plantDifficultyOptions.find(item => item.value === value).description;

const PlantFormDifficultyDescription = ({ field }) => (
  <FormText color="muted">
    { getDescription(field.value) + '.' }
  </FormText>
);

const PlantFormDifficulty = (props) => (
  <FormGroup tag="fieldset">
    <legend className="legend-form-label">
      Difficulty:
      <span className="asterisk" />
    </legend>
    {
      plantDifficultyOptions.map(plantDifficultyOption)
    }
    <Field name={ plantDifficultyName } component={ PlantFormDifficultyDescription } />
  </FormGroup>
);

PlantFormDifficulty.propTypes = {};

export default PlantFormDifficulty;
