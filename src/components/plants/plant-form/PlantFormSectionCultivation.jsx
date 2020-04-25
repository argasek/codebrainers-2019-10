import React from "react";
import { Col, Label, Row } from "reactstrap";
import { Field } from "formik";
import { plantExposureOptions, plantHumidityOptions, plantTemperatureOptions } from "constants/PlantConstants";
import PlantasticSelect from "../../shared/form/PlantasticSelect";

const PlantFormSectionCultivation = (props) => {
  const plantExposureId = "plantExposure";
  const plantHumidityId = "plantHumidity";
  const plantTemperatureId = "plantTemperature";
  return (
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
  );
};

PlantFormSectionCultivation.propTypes = {};

export default PlantFormSectionCultivation;
