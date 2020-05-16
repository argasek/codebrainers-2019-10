import React from "react";
import { Col, Row } from "reactstrap";
import PlantFormSectionHeader from 'components/plants/plant-form/PlantFormSectionHeader';
import PlantFormWateringInterval from 'components/plants/plant-form/fields/PlantFormWateringInterval';
import PlantFormFertilizingInterval from 'components/plants/plant-form/fields/PlantFormFertilizingInterval';
import PlantFormLastWatered from 'components/plants/plant-form/fields/PlantFormLastWatered';
import PlantFormLastFertilized from 'components/plants/plant-form/fields/PlantFormLastFertilized';
import PlantFormSection from 'components/plants/plant-form/PlantFormSection';

const PlantFormMaintenance = () => (
  <PlantFormSection className="mb-0">
    <PlantFormSectionHeader>Maintenance cycle</PlantFormSectionHeader>
    <Row>
      <Col xs={ 12 } md={ 6 } lg={ 3 } xl={ 2 }>
        <PlantFormWateringInterval />
      </Col>
      <Col xs={ 12 } md={ 6 } lg={ 3 } xl={ 2 }>
        <PlantFormFertilizingInterval />
      </Col>
      <Col xs={ 12 } md={ 6 } lg={ 3 } xl={ 4 }>
        <PlantFormLastWatered />
      </Col>
      <Col xs={ 12 } md={ 6 } lg={ 3 } xl={ 4 }>
        <PlantFormLastFertilized />
      </Col>
    </Row>
  </PlantFormSection>
);

PlantFormMaintenance.propTypes = {};

export default React.memo(PlantFormMaintenance);
