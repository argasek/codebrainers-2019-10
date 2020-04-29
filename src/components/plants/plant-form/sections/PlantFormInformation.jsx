import React from "react";
import { Col, Row } from "reactstrap";
import PlantFormSectionHeader from 'components/plants/plant-form/PlantFormSectionHeader';
import PlantFormName from 'components/plants/plant-form/fields/PlantFormName';
import PlantFormDifficulty from 'components/plants/plant-form/fields/PlantFormDifficulty';
import PlantFormSection from 'components/plants/plant-form/PlantFormSection';
import PlantFormBlooming from 'components/plants/plant-form/fields/PlantFormBlooming';

const PlantFormInformation = (props) => {
  return (
    <PlantFormSection>
      <PlantFormSectionHeader>Basic information</PlantFormSectionHeader>
      <Row>
        <Col xs={ 12 } lg={ 4 } xl={ 4 }>
          <PlantFormName />
        </Col>
        <Col xs={ 12 } lg={ 6 } xl={ 6 }>
          <PlantFormDifficulty />
        </Col>
        <Col xs={ 12 } lg={ 2 } xl={ 2 }>
          <PlantFormBlooming />
        </Col>
      </Row>
    </PlantFormSection>
  );
};

PlantFormInformation.propTypes = {};

export default PlantFormInformation;
