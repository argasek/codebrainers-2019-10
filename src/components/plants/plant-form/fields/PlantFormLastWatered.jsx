import React from 'react';
import { Label } from 'reactstrap';
import PlantFormFields from 'components/plants/plant-form/constants/PlantFormFields';
import PlantasticDatePicker from 'components/shared/form/PlantasticDatePicker';

const PlantFormLastWatered = (props) => {
  const plantLastWateredId = "plantLastWatered";
  return (
    <React.Fragment>
      <Label for={ plantLastWateredId }>Last watered at:</Label>
      <PlantasticDatePicker
        id={ plantLastWateredId }
        name={ PlantFormFields.LAST_WATERED }
        dateFormat="yyyy-MM-dd"
        placeholderText="YYYY-MM-DD"
        className="form-control"
      />
    </React.Fragment>
  );
};

PlantFormLastWatered.propTypes = {};

export default PlantFormLastWatered;
