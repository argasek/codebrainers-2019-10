import React from "react";
import { Col, Label, Row } from "reactstrap";
import { Field } from "formik";
import { plantHumidityOptions, plantTemperatureOptions } from "constants/PlantConstants";
import PlantasticSelect from "components/shared/form/PlantasticSelect";
import PlantFormFieldExposure from "components/plants/plant-form/fields/PlantFormFieldExposure";

const PlantFormSectionCultivation = (props) => {
  const plantHumidityId = "plantHumidity";
  const plantTemperatureId = "plantTemperature";
  return (
    <section className="mb-4">
      <h4>Cultivation requirements</h4>
      <Row>
        <Col xs={ 6 } lg={ 4 }>
          <PlantFormFieldExposure />
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
  );
};

PlantFormSectionCultivation.propTypes = {};

export default PlantFormSectionCultivation;
