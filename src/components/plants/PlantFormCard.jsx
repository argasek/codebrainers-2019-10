import React, { useState } from 'react';
import PlantForm from './plant-form/PlantForm';
import { Card, CardBody } from 'reactstrap';
import { plantFormCard } from 'proptypes/PlantFormPropTypes';
import PlantFormFields from 'components/plants/plant-form/constants/PlantFormFields';
import get from 'lodash-es/get';

/**
 * We assume certain simplification here -- in our case, we either use
 * this component as Create Plant; in such case subsequent equal "empty
 * form" values are enough to consider all properties equal. For Edit
 * Plant case we assume the same, i.e. we ignore comparing of label
 * changes etc.
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

  return areValuesEqual;
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

PlantFormCard.propTypes = plantFormCard;

export default React.memo(PlantFormCard, propsAreEqual);
