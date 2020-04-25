import React from "react";
import { Col, FormText, Label, Row } from "reactstrap";
import { Field } from "formik";
import PlantasticInput from "components/shared/form/PlantasticInput";

const PlantFormSectionMaintenance = (props) => {
  const wateringIntervalId = "plantWateringInterval";
  const lastFertilizedId = "plantLastFertilized";
  const lastWateredId = "plantLastWatered";
  const fertilizingIntervalId = "plantFertilizingInterval";
  return (
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
  );
};

PlantFormSectionMaintenance.propTypes = {};

export default PlantFormSectionMaintenance;
