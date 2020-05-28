import React from 'react';
import { FormGroup, Label } from 'reactstrap';
import { PlantFormFields } from 'components/plants/plant-form/constants/PlantFormFields';
import PlantasticDatePicker from 'components/shared/form/PlantasticDatePicker';

const PlantFormLastWatered = (props) => {
  const id = "plantLastWatered";
  return (
    <FormGroup>
      <Label for={ id }>Last watered at:</Label>
      <PlantasticDatePicker
        id={ id }
        name={ PlantFormFields.LAST_WATERED }
        dateFormat="yyyy-MM-dd"
        placeholderText="YYYY-MM-DD"
        className="form-control"
      />
    </FormGroup>
  );
};

PlantFormLastWatered.propTypes = {};

export default PlantFormLastWatered;
