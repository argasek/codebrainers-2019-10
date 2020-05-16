import React, { useState } from 'react';
import PlantForm from './plant-form/PlantForm';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { plantCreatePropTypes } from 'proptypes/PlantFormPropTypes';
import PlantFormFields from 'components/plants/plant-form/constants/PlantFormFields';
import capitalize from 'lodash-es/capitalize';

const PlantCreate = ({ cardHeaderLabel, formLabel, initialValues, ...rest }) => {
  const [ plantName, setPlantName ] = useState(initialValues[PlantFormFields.NAME]);
  console.log('COMP: PlantCreate');
  return (
    <Card className="mb-4" color="light">
      <CardHeader>
        { capitalize(formLabel) }: <span className="font-weight-semibold">{ plantName }</span>
      </CardHeader>
      <CardBody>
        <h3 className="mb-4">{ formLabel }</h3>
        <PlantForm
          onPlantNameChange={ setPlantName }
          initialValues={ initialValues }
          { ...rest }
        />
      </CardBody>
    </Card>
  );
};

PlantCreate.propTypes = plantCreatePropTypes;

export default PlantCreate;
