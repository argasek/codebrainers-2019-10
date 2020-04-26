import React from "react";
import { Label } from "reactstrap";
import { Field } from "formik";
import PlantasticInput from 'components/shared/form/PlantasticInput';

const PlantFormLastWatered = (props) => {
  const plantLastWateredId = "plantLastWatered";
  return (
    <React.Fragment>
      <Label for={ plantLastWateredId }>Last watered at:</Label>
      <Field
        id={ plantLastWateredId }
        name="lastWatered"
        type="text"
        placeholder="YYYY-MM-DD"
        component={ PlantasticInput }
      />
    </React.Fragment>
  );
};

PlantFormLastWatered.propTypes = {};

export default PlantFormLastWatered;
