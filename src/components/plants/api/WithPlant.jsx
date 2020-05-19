import React, { useState } from 'react';
import axios from 'axios';
import { Api } from 'services/Api';
import { classToPlain } from 'serializers/Serializer';
import { withPlantPropTypes } from 'proptypes/WithPlantPropTypes';

const PLANT_PROGRESS_CREATE = 'create';
const PLANT_PROGRESS_UPDATE = 'update';
const PLANT_PROGRESS_REMOVE = 'remove';
const PLANT_PROGRESS_STOPPED = '';

const withPlant = (WrappedComponent) => {
  return ({ ...props }) => {
    const [ inProgress, setInProgress ] = useState(PLANT_PROGRESS_STOPPED);

    const stopProgress = () => setInProgress(PLANT_PROGRESS_STOPPED);

    const createPlant = (plant) => {
      setInProgress(PLANT_PROGRESS_CREATE);
      const data = classToPlain(plant);
      return axios.post(Api.PLANTS, data)
        .finally(stopProgress);
    };

    /**
     *
     * @param {Plant} plant
     * @return {Promise<void>}
     */
    const updatePlant = (plant) => {
      setInProgress(PLANT_PROGRESS_UPDATE);
      const data = classToPlain(plant);
      return axios.put(plant.url, data)
        .finally(stopProgress);
    };

    const removePlant = (plant) => {
      setInProgress(PLANT_PROGRESS_REMOVE);
      return axios.delete(plant.url)
        .finally(stopProgress);
    };

    return (
      <WrappedComponent
        { ...props }
        createPlant={ createPlant }
        removePlant={ removePlant }
        updatePlant={ updatePlant }
        plantInProgress={ inProgress }
      />
    );
  };

};

withPlant.propTypes = withPlantPropTypes;

export {
  PLANT_PROGRESS_CREATE,
  PLANT_PROGRESS_UPDATE,
  PLANT_PROGRESS_REMOVE,
  withPlant,
};
