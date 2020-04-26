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

    const onSubmit = () => {
    };

    return (
      <Formik initialValues={ initialValues } onSubmit={ onSubmit }>
        { ({ isValid }) => (
          <Form className="plant-form">
            <h3 className="mb-4">Create plant</h3>
            <PlantFormInformation />
            <PlantFormCultivation />
            <PlantFormMaintenance />
            <Button color="primary" type="submit" className="mt-3">
              Create new plant
            </Button>
          </Form>
        ) }
      </Formik>
    );
  }
}

PlantForm.propTypes = {};

export default PlantForm;
