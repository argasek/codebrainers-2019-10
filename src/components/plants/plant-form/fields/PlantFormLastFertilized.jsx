import React from "react";
import { Label } from "reactstrap";
import { Field } from "formik";
import PlantasticInput from 'components/shared/form/PlantasticInput';
import PlantFormFields from 'components/plants/plant-form/constants/PlantFormFields';

const PlantFormLastFertilized = (props) => {
  const plantLastFertilizedId = "plantLastFertilized";
  return (
    <React.Fragment>
      <Label for={ plantLastFertilizedId }>Last fertilized at:</Label>
      <Field
        id={ plantLastFertilizedId }
        name={ PlantFormFields.LAST_FERTILIZED }
        type="text"
        placeholder="YYYY-MM-DD"
        component={ PlantasticInput }
      />
    </React.Fragment>
  );
};

PlantFormLastFertilized.propTypes = {};

export default PlantFormLastFertilized;
