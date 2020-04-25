import { Button } from "reactstrap";
import {
  plantDifficultyOptions,
  plantExposureOptions,
  plantHumidityOptions,
  plantTemperatureOptions,
} from "constants/PlantConstants";
import React from "react";
import { Form, Formik } from "formik";
import PlantFormSectionInfo from "./PlantFormSectionInfo";
import PlantFormSectionCultivation from "./PlantFormSectionCultivation";
import PlantFormSectionMaintenance from "./PlantFormSectionMaintenance";

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
            <PlantFormSectionInfo />
            <PlantFormSectionCultivation />
            <PlantFormSectionMaintenance />
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
