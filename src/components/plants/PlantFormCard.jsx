import React, { useState } from 'react';
import PlantForm from './plant-form/PlantForm';
import { Card, CardBody } from 'reactstrap';
import { plantFormCardPropTypes } from 'proptypes/PlantFormPropTypes';
import { plantFormFields, PlantFormFields } from 'components/plants/plant-form/constants/PlantFormFields';
import get from 'lodash-es/get';
import InProgress from 'components/shared/InProgress';
import { PLANT_PROGRESS_FETCH } from 'ducks/plant/plantSlice';

/**
 * We assume certain simplification here by ignoring
 * changes other than categories, rooms or initialValues.
 *
 * @param prevProps
 * @param nextProps
 * @return {boolean}
 */
const propsAreEqual = function (prevProps, nextProps) {
  const areValuesEqual = plantFormFields.areValuesEqual(
    prevProps.initialValues,
    nextProps.initialValues
  );

  const propList = [ 'categories', 'rooms', 'plantInProgress' ];
  const isPropEqual = (prop) => prevProps[prop] === nextProps[prop];

  return areValuesEqual && propList.every(isPropEqual);
};

const PlantFormCard = ({ formLabel, initialValues, plantInProgress, ...rest }) => {
  // We show progress icon only when fetch is active AND plant object is empty,
  // which happens when user navigated the page directly. This way we avoid flicker
  // when user navigates from the list.
  const inProgress = plantInProgress === PLANT_PROGRESS_FETCH && !initialValues.id;
  const defaultPlantName = get(initialValues, PlantFormFields.NAME, '');
  const [ plantName, setPlantName ] = useState(defaultPlantName);
  // TODO: initialValues are built upon old Plant, so cardHeaderLabel
  const cardHeaderLabel = inProgress ? formLabel : plantName || '…';
  return (
    <Card className="mb-4" color="light">
      <CardBody>
        <h3 className="mb-4">{ cardHeaderLabel }</h3>
        <InProgress inProgress={ inProgress } />
        {
          !inProgress &&
          <PlantForm
            onPlantNameChange={ setPlantName }
            initialValues={ initialValues }
            plantInProgress={ plantInProgress }
            { ...rest }
          />
        }
      </CardBody>
    </Card>
  );
};

PlantFormCard.propTypes = plantFormCardPropTypes;

export default React.memo(PlantFormCard, propsAreEqual);
