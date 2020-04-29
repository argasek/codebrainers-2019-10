import React from 'react';
import { Label } from 'reactstrap';
import PlantFormFields from 'components/plants/plant-form/constants/PlantFormFields';
import PlantasticDatePicker from 'components/shared/form/PlantasticDatePicker';

const PlantFormLastFertilized = (props) => {
  const plantLastFertilizedId = "plantLastFertilized";
  return (
    <React.Fragment>
      <Label for={ plantLastFertilizedId }>Last fertilized at:</Label>
      <PlantasticDatePicker
        id={ plantLastFertilizedId }
        name={ PlantFormFields.LAST_FERTILIZED }
        dateFormat="yyyy-MM-dd"
        placeholderText="YYYY-MM-DD"
        className="form-control"
      />
    </React.Fragment>
  );
};

PlantFormLastFertilized.propTypes = {};

export default PlantFormLastFertilized;
