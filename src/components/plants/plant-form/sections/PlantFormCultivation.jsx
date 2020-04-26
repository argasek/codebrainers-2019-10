import React from "react";
import { Col, Row } from "reactstrap";
import PlantFormExposure from "components/plants/plant-form/fields/PlantFormExposure";
import PlantFormHumidity from 'components/plants/plant-form/fields/PlantFormHumidity';
import PlantFormTemperature from 'components/plants/plant-form/fields/PlantFormTemperature';
import PlantFormSectionHeader from 'components/plants/plant-form/PlantFormSectionHeader';
import PlantFormSection from 'components/plants/plant-form/PlantFormSection';

/**
 * @component
 */
const PlantFormCultivation = () => {
  return (
    <PlantFormSection>
      <PlantFormSectionHeader>Cultivation</PlantFormSectionHeader>
      <Row>
        <Col xs={ 12 } md={ 4 }>
          <PlantFormExposure />
        </Col>
        <Col xs={ 12 } md={ 4 }>
          <PlantFormHumidity />
        </Col>
        <Col xs={ 12 } md={ 4 }>
          <PlantFormTemperature />
        </Col>
      </Row>
    </PlantFormSection>
  );
};

PlantFormCultivation.propTypes = {};

export default PlantFormCultivation;
