import React, { useState } from 'react';
import PlantForm from './plant-form/PlantForm';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { plantCreatePropTypes } from 'proptypes/PlantFormPropTypes';
import PlantFormFields from 'components/plants/plant-form/constants/PlantFormFields';

const PlantCreate = (props) => {
  const [ plantName, setPlantName ] = useState(props.initialValues[PlantFormFields.NAME]);
  console.log('COMP: PlantCreate');
  return (
    <Card className="mb-4" color="light">
      <CardHeader>
        Create Plant: <span className="font-weight-semibold">{ plantName }</span>
      </CardHeader>
      <CardBody>
        <h3 className="mb-4">Create plant</h3>
        <PlantForm
          onPlantNameChange={ setPlantName }
          { ...props }
        />
      </CardBody>
    </Card>
  );
};

PlantCreate.propTypes = plantCreatePropTypes;

export default PlantCreate;
