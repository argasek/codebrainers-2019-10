import React from "react";
import { Col, Row } from "reactstrap";
import PlantFormSectionHeader from 'components/plants/plant-form/PlantFormSectionHeader';
import PlantFormName from 'components/plants/plant-form/fields/PlantFormName';
import PlantFormDifficulty from 'components/plants/plant-form/fields/PlantFormDifficulty';
import PlantFormSection from 'components/plants/plant-form/PlantFormSection';

const PlantFormInformation = (props) => {
  return (
    <PlantFormSection>
      <PlantFormSectionHeader>Basic information</PlantFormSectionHeader>
      <Row>
        <Col xs={ 12 } lg={ 4 } xl={ 6 }>
          <PlantFormName />
        </Col>
        <Col xs={ 12 } lg={ 8 } xl={ 6 }>
          <PlantFormDifficulty />
        </Col>
      </Row>
    </PlantFormSection>
  );
};

PlantFormInformation.propTypes = {};

export default PlantFormInformation;
