import React from 'react';
import { Col, Row } from 'reactstrap';
import PlantFormSectionHeader from 'components/plants/plant-form/PlantFormSectionHeader';
import PlantFormName from 'components/plants/plant-form/fields/PlantFormName';
import PlantFormDifficulty from 'components/plants/plant-form/fields/PlantFormDifficulty';
import PlantFormSection from 'components/plants/plant-form/PlantFormSection';
import PlantFormBlooming from 'components/plants/plant-form/fields/PlantFormBlooming';
import PlantFormCategory from 'components/plants/plant-form/fields/PlantFormCategory';
import PlantFormRoom from 'components/plants/plant-form/fields/PlantFormRoom';
import { plantFormInformationPropTypes } from 'proptypes/PlantFormPropTypes';

const PlantFormInformation = ({ categories, rooms }) => {
  return (
    <PlantFormSection>
      <PlantFormSectionHeader>General information</PlantFormSectionHeader>
      <Row>
        <Col xs={ 12 } lg={ 4 }>
          <PlantFormName />
        </Col>
        <Col xs={ 12 } lg={ 6 }>
          <PlantFormDifficulty />
        </Col>
        <Col xs={ 12 } lg={ 2 }>
          <PlantFormBlooming />
        </Col>
        <Col xs={ 12 } lg={ 4 }>
          <PlantFormCategory categories={ categories } />
        </Col>
        <Col xs={ 12 } lg={ 4 }>
          <PlantFormRoom rooms={ rooms } />
        </Col>

      </Row>
    </PlantFormSection>
  );
};

PlantFormInformation.propTypes = plantFormInformationPropTypes;

export default React.memo(PlantFormInformation);
