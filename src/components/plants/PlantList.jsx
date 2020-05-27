import React from 'react';
import { Card, CardBody } from 'reactstrap';
import InProgress from 'components/shared/InProgress';
import OperationFailed from 'components/shared/OperationFailed';
import Plants from 'components/plants/Plants';
import { plantListPropTypes } from 'proptypes/PlantListPropTypes';
import PlantCreateButton from 'components/plants/PlantCreateButton';
import TopHeaderWithActionButton from 'components/shared/TopHeaderWithActionButton';

/**
 * This is an example of JSDoc comment.
 *
 * @param {Plant[]} plants Array of plants
 * @param {Category[]} categories Array of categories
 * @param {Room[]} rooms Array of categories
 * @param {string} plantsErrorMessage
 * @param {boolean} plantsInProgress
 * @param {boolean} plantsSuccess
 * @param {boolean} success
 * @returns {*}
 * @constructor
 */
const PlantList = ({ plants, plantsErrorMessage, plantsInProgress, plantsSuccess, success, ...rest }) => {
  const totalPlants = plants.length;
  return (
    <Card className="mb-4">
      <CardBody>
        <TopHeaderWithActionButton title="List of plants">
          <PlantCreateButton />
        </TopHeaderWithActionButton>

        <p>You have { totalPlants } plants in all your rooms.</p>

        <InProgress inProgress={ plantsInProgress } />

        <OperationFailed isFailed={ plantsSuccess === false }>
          <strong>Failed to fetch plants.</strong>
          { ' Reason: ' }
          { plantsErrorMessage }
        </OperationFailed>

        {
          success &&
          <Plants
            plants={ plants }
            { ...rest }
          />
        }
      </CardBody>
    </Card>
  );
};

PlantList.propTypes = plantListPropTypes;

export default React.memo(PlantList);
