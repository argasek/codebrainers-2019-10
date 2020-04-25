import { Button, Col, FormGroup, Label, Row, FormText } from "reactstrap";
import {
  plantExposureOptions,
  plantHumidityOptions,
  plantDifficultyOptions,
  plantTemperatureOptions,
} from "constants/PlantConstants";
import React from "react";
import PropTypes from "prop-types";
import { Field, Form, Formik } from "formik";
import PlantasticInput from "components/shared/form/PlantasticInput";
import PlantasticSelect from "components/shared/form/PlantasticSelect";
import PlantasticRadioNoFeedback from "components/shared/form/PlantasticRadioNoFeedback";
import PlantFormSectionInfo from "./PlantFormSectionInfo";

class PlantForm extends React.PureComponent {
  constructor(props) {
    super(props);
  }

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

    const plantExposureId = "plantExposure";
    const plantHumidityId = "plantHumidity";
    const plantTemperatureId = "plantTemperature";
    const wateringIntervalId = "plantWateringInterval";
    const lastFertilizedId = "plantLastFertilized";
    const lastWateredId = "plantLastWatered";
    const fertilizingIntervalId = "plantFertilizingInterval";

    return (
      <Formik initialValues={ initialValues } onSubmit={ onSubmit }>
        { ({ isValid }) => (
          <Form className="plant-form">
            <PlantFormSectionInfo />
            <section className="mb-4">
              <h4>Cultivation requirements</h4>
              <Row>
                <Col xs={ 6 } lg={ 4 }>
                  <Label for={ plantExposureId }>Exposure:</Label>
                  <Field
                    id={ plantExposureId }
                    name="exposure"
                    items={ plantExposureOptions }
                    component={ PlantasticSelect }
                  />
                </Col>
                <Col xs={ 6 } lg={ 4 }>
                  <Label for={ plantHumidityId }>Humidity:</Label>
                  <Field
                    id={ plantHumidityId }
                    name="humidity"
                    items={ plantHumidityOptions }
                    component={ PlantasticSelect }
                  />
                </Col>
                <Col xs={ 12 } lg={ 4 }>
                  <Label for={ plantTemperatureId }>Temperature:</Label>
                  <Field
                    id={ plantTemperatureId }
                    name="temperature"
                    items={ plantTemperatureOptions }
                    component={ PlantasticSelect }
                  />
                </Col>
              </Row>
            </section>
            <section className="mb-4">
              <h4>Maintenance cycle</h4>
              <Row>
                <Col xs={ 12 } lg={ 6 } className="mb-4">
                  <Label for={ wateringIntervalId }>Watering interval:</Label>
                  <Field
                    id={ wateringIntervalId }
                    name="wateringInterval"
                    type="text"
                    placeholder="1"
                    component={ PlantasticInput }
                  />
                  <FormText color="muted">
                    Please provide numerical value in days.
                  </FormText>
                </Col>
                <Col xs={ 12 } lg={ 6 } className="mb-4">
                  <Label for={ fertilizingIntervalId }>Fertilizing interval:</Label>
                  <Field
                    id={ fertilizingIntervalId }
                    name="wateringInterval"
                    type="text"
                    placeholder="1"
                    component={ PlantasticInput }
                  />
                  <FormText color="muted">
                    Please provide numerical value in days.
                  </FormText>
                </Col>
                <Col xs={ 12 } lg={ 6 } className="mb-4">
                  <Label for={ lastWateredId }>Last watered:</Label>
                  <Field
                    id={ lastWateredId }
                    name="lastWatered"
                    type="text"
                    placeholder="YYYY-MM-DD"
                    component={ PlantasticInput }
                  />
                </Col>
                <Col xs={ 12 } lg={ 6 } className="mb-4">
                  <Label for={ lastFertilizedId }>Last fertilized:</Label>
                  <Field
                    id={ lastFertilizedId }
                    name="lastFertilized"
                    type="text"
                    placeholder="YYYY-MM-DD"
                    component={ PlantasticInput }
                  />
                </Col>
              </Row>
            </section>
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
