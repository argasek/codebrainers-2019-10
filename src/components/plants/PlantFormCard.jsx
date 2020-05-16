import React, { useState } from 'react';
import PlantForm from './plant-form/PlantForm';
import { Card, CardBody } from 'reactstrap';
import { plantFormCardPropTypes } from 'proptypes/PlantFormPropTypes';
import PlantFormFields from 'components/plants/plant-form/constants/PlantFormFields';
import get from 'lodash-es/get';

/**
 * We assume certain simplification here by ignoring
 * changes other than categories, rooms or initialValues.
 *
 * @param prevProps
 * @param nextProps
 * @return {boolean}
 */
const propsAreEqual = function (prevProps, nextProps) {
  const areValuesEqual = PlantFormFields.areValuesEqual(
    prevProps.initialValues,
    nextProps.initialValues
  );

  const propList = [ 'categories', 'rooms' ];
  const isPropEqual = (prop) => prevProps[prop] === nextProps[prop];

  return areValuesEqual && propList.every(isPropEqual);
};

const PlantFormCard = ({ formLabel, initialValues, ...rest }) => {
  const defaultPlantName = get(initialValues, PlantFormFields.NAME, '');
  const [ plantName, setPlantName ] = useState(defaultPlantName);
  const cardHeaderLabel = get(initialValues, 'id') ? plantName || '…' : formLabel;
  return initialValues ? (
    <Card className="mb-4" color="light">
      <CardBody>
        <h3 className="mb-4">{ cardHeaderLabel }</h3>
        <PlantForm
          onPlantNameChange={ setPlantName }
          initialValues={ initialValues }
          { ...rest }
        />
      </CardBody>
    </Card>
  ) : null;
};

PlantFormCard.propTypes = plantFormCardPropTypes;

export default React.memo(PlantFormCard, propsAreEqual);
