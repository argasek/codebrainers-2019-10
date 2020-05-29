import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import PlantFormCard from 'components/plants/PlantFormCard';
import { createPlant, selectPlantInProgress } from 'ducks/plant/plantSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { compose } from 'redux';
import { withToastManager } from 'react-toast-notifications';
import { Toast } from 'components/shared/Toast';
import useCategories from 'ducks/categories/useCategories';
import useRooms from 'ducks/rooms/useRooms';
import memoize from 'lodash-es/memoize';
import { plantFormFields } from 'components/plants/plant-form/constants/PlantFormFields';
import Plant from 'models/Plant';
import Success from 'constants/Success';

const PlantCreatePage = ({ navigateToPlantList, onPlantError, toastManager }) => {
  const dispatch = useDispatch();

  const plantInProgress = useSelector(selectPlantInProgress);

  const toast = new Toast(toastManager);
  const { categories, categoriesSuccess, fetchCategories } = useCategories();
  const { rooms, roomsSuccess, fetchRooms } = useRooms();
  const plant = new Plant();
  const getInitialValues = memoize(plantFormFields.getInitialValues);
  const initialValues = getInitialValues(plant);

  /**
   * @param {Plant} plant
   * @param {function} onSubmitApiErrors
   */
  const onPlantCreate = async (plant, onSubmitApiErrors) => {

    const action = await dispatch(createPlant(plant));

    if (createPlant.fulfilled.match(action)) {
      const plant = unwrapResult(action);
      const successMessage = `Created new plant: ${ plant.name }.`;
      toast.success(successMessage);
      navigateToPlantList();
    } else {
      const errorTitle = 'Creating of plant failed';
      const { errors, status } = onPlantError(action, errorTitle);
      onSubmitApiErrors(errors, status);
    }

    return action;
  };

  useEffect(() => {
    // Fast hack
    if (categoriesSuccess === Success.UNKNOWN) {
      const categoriesPromise = fetchCategories();
    }
    if (roomsSuccess === Success.UNKNOWN) {
      const roomsPromise = fetchRooms();
    }
  }, []);

  return (
    <PlantFormCard
      categories={ categories }
      formLabel="Create new plant"
      initialValues={ initialValues }
      onSubmit={ onPlantCreate }
      plantInProgress={ plantInProgress }
      rooms={ rooms }
    />
  );
};

PlantCreatePage.propTypes = {
  navigateToPlantList: PropTypes.func.isRequired,
  onPlantError: PropTypes.func.isRequired,
};

export default compose(
  withToastManager,
)(PlantCreatePage);
