import HelmetRoute from 'components/shared/HelmetRoute';
import memoize from 'lodash-es/memoize';
import Plant from 'models/Plant';
import PlantFormCard from 'components/plants/PlantFormCard';
import { plantFormFields } from 'components/plants/plant-form/constants/PlantFormFields';
import PlantList from 'components/plants/PlantList';
import React, { useCallback, useEffect, useState } from 'react';
import Routes from 'constants/Routes';
import useCategories from 'ducks/categories/useCategories';
import usePlants from 'ducks/plants/usePlants';
import useRooms from 'ducks/rooms/useRooms';
import { compose } from 'redux';
import { createPlant, removePlantById, selectPlantInProgress, updatePlant, } from 'ducks/plant/plantSlice';
import { generatePath, matchPath, Switch, useHistory, useLocation } from 'react-router-dom';
import { Toast } from 'components/shared/Toast';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { withToastManager } from 'react-toast-notifications';

const PlantsPage = (props) => {
  const history = useHistory();
  const location = useLocation();
  const { toastManager } = props;

  const toast = new Toast(toastManager);

  const [ initialValues, setInitialValues ] = useState(undefined);
  const [ inProgress, setInProgress ] = useState(false);

  const {
    categories,
    categoriesSuccess,
    fetchCategories,
  } = useCategories();

  const {
    rooms,
    roomsSuccess,
    fetchRooms,
  } = useRooms();

  const {
    fetchPlants,
    plants,
    plantsCreatePlant,
    plantsErrorMessage,
    plantsRemovePlant,
    plantsSuccess,
    plantsUpdatePlant,
  } = usePlants();

  const dispatch = useDispatch();

  const plantInProgress = useSelector(selectPlantInProgress);

  const updateInitialValuesFromLocation = useCallback((location) => {
    const options = {
      exact: false,
      strict: false
    };

    const { pathname } = location;

    const editPath = matchPath(pathname, { ...options, path: Routes.PLANT_EDIT });
    const createPath = matchPath(pathname, { ...options, path: Routes.PLANTS_CREATE });

    const getInitialValues = memoize(plantFormFields.getInitialValues);

    if (editPath !== null) {
      const plantId = +editPath.params.plantId;
      const plant = plants.find((item) => item.id === plantId);
      if (plant instanceof Plant) {
        setInitialValues(getInitialValues(plant));
      } else {
        history.push(Routes.NOT_FOUND);
      }
    }

    if (createPath !== null) {
      const plant = new Plant();
      setInitialValues(getInitialValues(plant));
    }

  }, [ history, plants ]);

  useEffect(() => {
    const roomsPromise = fetchRooms();
    const categoriesPromise = fetchCategories();
    const plantsPromise = fetchPlants();

    plantsPromise
      .then(() => updateInitialValuesFromLocation(location));

    setInProgress(true);

    const allPromises = Promise.all([
      roomsPromise,
      categoriesPromise,
      plantsPromise,
    ]);

    allPromises
      .finally(() => setInProgress(false));

  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    updateInitialValuesFromLocation(location);
  }, [ location, updateInitialValuesFromLocation ]);

  const navigateToPlantList = () => {
    history.push(Routes.PLANTS);
  };

  const onPlantError = (action, title) => {
    // If payload is present, there were some validation errors.
    if (action.payload) {
      return action.payload;
    }
    const error = action.error;
    const message = error.message;
    toast.error(message, title);
    return action;
  };

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
      plantsCreatePlant(plant);
      navigateToPlantList();
    } else {
      const errorTitle = 'Creating of plant failed';
      const { errors, status } = onPlantError(action, errorTitle);
      onSubmitApiErrors(errors, status);
    }

    return action;
  };

  const onPlantRemove = async (onSubmitApiErrors) => {
    const id = initialValues.id;
    const action = await dispatch(removePlantById(id));

    if (removePlantById.fulfilled.match(action)) {
      const name = '';
      const successMessage = `Plant ${ name } was removed.`;
      toast.success(successMessage);
      plantsRemovePlant(id);
      navigateToPlantList();
    } else {
      const errorTitle = 'Removing of plant failed';
      const { errors, status } = onPlantError(action, errorTitle);
      onSubmitApiErrors(errors, status);
    }

    return action;
  };

  /**
   * @param {Plant} plant
   */
  const onPlantUpdate = async (plant, onSubmitApiErrors) => {
    const action = await dispatch(updatePlant(plant));

    if (updatePlant.fulfilled.match(action)) {
      const successMessage = `Saved updates to ${ plant.name }.`;
      toast.success(successMessage);
      plantsUpdatePlant(plant);
      navigateToPlantList();
    } else {
      const errorTitle = `Updating of plant failed!`;
      const { errors, status } = onPlantError(action, errorTitle);
      onSubmitApiErrors(errors, status);
    }

    return action;
  };

  const onEdit = (plantId) => {
    const path = generatePath(Routes.PLANT_EDIT, { plantId });
    history.push(path);
  };

  const success = categoriesSuccess && plantsSuccess && roomsSuccess;

  return (
    <Switch>
      <HelmetRoute
        exact
        path={ Routes.PLANTS }
        render={ () =>
          <PlantList
            categories={ categories }
            onEdit={ onEdit }
            plants={ plants }
            plantsErrorMessage={ plantsErrorMessage }
            plantsInProgress={ inProgress }
            plantsSuccess={ plantsSuccess }
            rooms={ rooms }
            success={ success }
          />
        }
        title="List of plants"
      />
      <HelmetRoute
        path={ [ Routes.PLANTS_CREATE ] }
        render={ () => (
          <PlantFormCard
            categories={ categories }
            formLabel="Create new plant"
            initialValues={ initialValues }
            onSubmit={ onPlantCreate }
            plantInProgress={ plantInProgress }
            rooms={ rooms }
          />
        ) }
        title="Create plant"
      />
      <HelmetRoute
        path={ Routes.PLANT_EDIT }
        render={ () => (
          <PlantFormCard
            categories={ categories }
            formLabel="Edit plant"
            initialValues={ initialValues }
            onSubmit={ onPlantUpdate }
            onRemove={ onPlantRemove }
            plantInProgress={ plantInProgress }
            rooms={ rooms }
          />
        ) }
        title={ initialValues && initialValues.name }
      />
    </Switch>
  );
};

PlantsPage.propTypes = {};

export default compose(
  withToastManager,
)(PlantsPage);
