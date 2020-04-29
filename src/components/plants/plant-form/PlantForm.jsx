import { Button } from "reactstrap";
import {
  plantDifficultyOptions,
  plantExposureOptions,
  plantHumidityOptions,
  plantTemperatureOptions,
} from "constants/PlantConstants";
import React from "react";
import { Form, Formik } from "formik";
import PlantFormInformation from "components/plants/plant-form/sections/PlantFormInformation";
import PlantFormCultivation from "components/plants/plant-form/sections/PlantFormCultivation";
import PlantFormMaintenance from "components/plants/plant-form/sections/PlantFormMaintenance";
import PropTypes from 'prop-types';
import Effect from 'components/shared/form/Effect';

class PlantForm extends React.PureComponent {

  render() {
    const firstOf = (arr) => arr[0].id;

    const name = "";
    const exposure = firstOf(plantExposureOptions);
    const humidity = firstOf(plantHumidityOptions);
    const difficultyLevel = firstOf(plantDifficultyOptions);
    const temperature = firstOf(plantTemperatureOptions);
    const wateringInterval = "";
    const lastFertilized = "";
    const lastWatered = "";
    const fertilizingInterval = "";

    const initialValues = {
      name,
      exposure,
      humidity,
      difficultyLevel,
      temperature,
      wateringInterval,
      lastFertilized,
      lastWatered,
      fertilizingInterval,
    };

    const onChange = (currentState, previousState) => {
      const { name } = currentState.values;
      this.props.onPlantNameChange(name);
    };

    const onSubmit = (values) => {
      console.log(values);
    };

    return (
      <Formik initialValues={ initialValues } onSubmit={ onSubmit }>
        { ({ isValid }) => (
          <Form className="plant-form">
            <Effect onChange={ onChange } />
            <PlantFormInformation />
            <PlantFormCultivation />
            <PlantFormMaintenance />
            <Button color="primary" type="submit" className="mt-3" disabled={ !isValid }>
              Create new plant
            </Button>
          </Form>
        ) }
      </Formik>
    );
  }
}

PlantForm.propTypes = {
  onPlantNameChange: PropTypes.func.isRequired,
};

export default PlantForm;
