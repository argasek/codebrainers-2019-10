import React, { useState } from 'react';
import axios from 'axios';
import { Api } from 'services/Api';
import { classToPlain } from 'serializers/Serializer';
import { withPlantPropTypes } from 'proptypes/WithPlantPropTypes';

const withPlant = (WrappedComponent) => {
  return ({ ...props }) => {
    const [ inProgress, setInProgress ] = useState(false);

    const stopProgress = () => setInProgress(false);

    const createPlant = (plant) => {
      setInProgress(true);
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
      setInProgress(true);
      const data = classToPlain(plant);
      return axios.put(plant.url, data)
        .finally(stopProgress);
    };

    return (
      <WrappedComponent
        { ...props }
        createPlant={ createPlant }
        updatePlant={ updatePlant }
        plantInProgress={ inProgress }
      />
    );
  };

};

withPlant.propTypes = withPlantPropTypes;

export default withPlant;
