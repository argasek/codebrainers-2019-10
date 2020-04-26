import React from "react";
import { Label } from "reactstrap";
import { Field } from "formik";
import PlantasticInput from 'components/shared/form/PlantasticInput';

const PlantFormLastFertilized = (props) => {
  const plantLastFertilizedId = "plantLastFertilized";
  return (
    <React.Fragment>
      <Label for={ plantLastFertilizedId }>Last fertilized at:</Label>
      <Field
        id={ plantLastFertilizedId }
        name="lastFertilized"
        type="text"
        placeholder="YYYY-MM-DD"
        component={ PlantasticInput }
      />
    </React.Fragment>
  );
};

PlantFormLastFertilized.propTypes = {};

export default PlantFormLastFertilized;
