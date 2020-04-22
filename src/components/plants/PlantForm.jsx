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

    const onSubmit = () => {};

    const plantExposureId = "plantExposure";
    const plantNameId = "plantName";
    const plantHumidityId = "plantHumidity";
    const plantDifficultyId = "plantDifficultyLevel";
    const plantTemperatureId = "plantTemperature";
    const wateringIntervalId = "plantWateringInterval";
    const lastFertilizedId = "plantLastFertilized";
    const lastWateredId = "plantLastWatered";
    // const fertilizingIntervalId = "plantFertilizingInterval";

    return (
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ isValid }) => (
          <Form method="GET">
            <h4>Plant info</h4>
            <Row>
              <Col xs={12} lg={4}>
                <FormGroup>
                  <Label for={plantNameId}>Plant name:</Label>
                  <Field
                    id={plantNameId}
                    name="name"
                    type="text"
                    placeholder="Monstera Deliciosa"
                    component={PlantasticInput}
                  />
                </FormGroup>
              </Col>
              <Col xs={12} lg={8}>
                <FormGroup tag="fieldset">
                  <legend className="col-form-label mb-2">
                    Difficulty:
                    <span className="asterisk" />
                  </legend>
                  {plantDifficultyOptions.map((item) => (
                    <Field
                      id={plantDifficultyId + item.id}
                      key={item.id}
                      value={item.id}
                      name="difficultyLevel"
                      type="radio"
                      label={item.name}
                      component={PlantasticRadioNoFeedback}
                      className="mb-2"
                      inline
                    />
                  ))}
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <span>Cultivation requirements</span>
              <Row>
                <Col xs={6} lg={3}>
                  <Label for={plantExposureId}>Exposure:</Label>
                  <Field
                    id={plantExposureId}
                    name="exposure"
                    items={plantExposureOptions}
                    component={PlantasticSelect}
                  />
                </Col>
                <Col xs={6} lg={3}>
                  <Label for={plantHumidityId}>Humidity:</Label>
                  <Field
                    id={plantHumidityId}
                    name="humidity"
                    items={plantHumidityOptions}
                    component={PlantasticSelect}
                  />
                </Col>
                <Col xs={12} lg={2}>
                  <Label for={plantTemperatureId}>Temperature:</Label>
                  <Field
                    id={plantTemperatureId}
                    name="temperature"
                    items={plantTemperatureOptions}
                    component={PlantasticSelect}
                  />
                </Col>

                <Col xs={12} lg={4}>
                  <Label for={wateringIntervalId}>Watering interval:</Label>
                  <Field
                    id={wateringIntervalId}
                    name="wateringInterval"
                    type="text"
                    placeholder="1"
                    component={PlantasticInput}
                  />
                  <FormText color="muted">
                    Please provide numerical value in days.
                  </FormText>
                </Col>
              </Row>
            </FormGroup>

            <FormGroup tag="fieldset" className="cultivation-maintanance">
              <Row>
                {/* 1. Dodać pola lastWatered i lastFertilized. */}
                <Col xs={12} lg={6}>
                  <Label for={lastFertilizedId}>Last fertilized:</Label>
                  <Field
                    id={lastFertilizedId}
                    name="lastFertilized"
                    type="text"
                    placeholder="YYYY-MM-DD"
                    component={PlantasticInput}
                  />
                </Col>

                <Col xs={12} lg={6}>
                  <Label for={lastWateredId}>Last Watered:</Label>
                  <Field
                    id={lastWateredId}
                    name="lastWatered"
                    type="text"
                    placeholder="YYYY-MM-DD"
                    component={PlantasticInput}
                  />
                </Col>
              </Row>
            </FormGroup>
            <Button color="primary" type="submit" className="mt-3">
              Create new plant
            </Button>
          </Form>
        )}
      </Formik>
    );
  }
}

PlantForm.propTypes = {};

export default PlantForm;
