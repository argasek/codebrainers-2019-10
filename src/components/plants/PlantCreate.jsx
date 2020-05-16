import React, { useState } from 'react';
import PlantForm from './plant-form/PlantForm';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { plantCreatePropTypes } from 'proptypes/PlantFormPropTypes';
import PlantFormFields from 'components/plants/plant-form/constants/PlantFormFields';
import get from 'lodash-es/get';
import capitalize from 'lodash-es/capitalize';

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

const PlantCreate = ({ cardHeaderLabel, formLabel, initialValues, ...rest }) => {
  const defaultPlantName = get(initialValues, PlantFormFields.NAME, '');
  const [ plantName, setPlantName ] = useState(defaultPlantName);
  return initialValues ? (
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
  ) : null;
};

PlantCreate.propTypes = plantCreatePropTypes;

export default React.memo(PlantCreate, propsAreEqual);
