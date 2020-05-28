import React from 'react';
import { FormGroup, Label } from 'reactstrap';
import { PlantFormFields } from 'components/plants/plant-form/constants/PlantFormFields';
import PlantasticDatePicker from 'components/shared/form/PlantasticDatePicker';

const PlantFormLastFertilized = (props) => {
  const id = "plantLastFertilized";
  return (
    <FormGroup>
      <Label for={ id }>Last fertilized at:</Label>
      <PlantasticDatePicker
        id={ id }
        name={ PlantFormFields.LAST_FERTILIZED }
        dateFormat="yyyy-MM-dd"
        placeholderText="YYYY-MM-DD"
        className="form-control"
      />
    </FormGroup>
  );
};

PlantFormLastFertilized.propTypes = {};

export default PlantFormLastFertilized;
