import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import PlantFormCard from 'components/plants/PlantFormCard';
import { removePlantById, updatePlant } from 'ducks/plant/plantSlice';
import { useDispatch } from 'react-redux';
import { compose } from 'redux';
import { withToastManager } from 'react-toast-notifications';
import { Toast } from 'components/shared/Toast';
import useCategories from 'ducks/categories/useCategories';
import useRooms from 'ducks/rooms/useRooms';
import { useHistory, useParams } from 'react-router-dom';
import { plantFormFields } from 'components/plants/plant-form/constants/PlantFormFields';
import { Helmet } from "react-helmet-async";
import Success from 'constants/Success';
import usePlant from 'ducks/plant/usePlant';

const PlantUpdatePage = ({ navigateToPlantList, onPlantError, toastManager }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();
  const toast = new Toast(toastManager);
  const { categories, categoriesSuccess, fetchCategories } = useCategories();
  const { rooms, roomsSuccess, fetchRooms } = useRooms();
  const {
    fetchPlant,
    plant,
    plantInProgress,
    plantSuccess,
  } = usePlant();

  const plantId = +params.plantId;

  const initialValues = plantFormFields.getInitialValues(plant);

  const title = plant.name;

  const onPlantRemove = async (onSubmitApiErrors) => {
    const id = plantId;
    const action = await dispatch(removePlantById(id));

    if (removePlantById.fulfilled.match(action)) {
      const name = '';
      const successMessage = `Plant ${ name } was removed.`;
      toast.success(successMessage);
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
   * @param {function} onSubmitApiErrors
   */
  const onPlantUpdate = async (plant, onSubmitApiErrors) => {
    const action = await dispatch(updatePlant(plant));

    if (updatePlant.fulfilled.match(action)) {
      const successMessage = `Saved updates to ${ plant.name }.`;
      toast.success(successMessage);
      navigateToPlantList();
    } else {
      const errorTitle = `Updating of plant failed!`;
      const { errors, status } = onPlantError(action, errorTitle);
      onSubmitApiErrors(errors, status);
    }

    return action;
  };


  useEffect(() => {
    console.log('Fetch of plantId…', plantId);
    const plantPromise = fetchPlant(plantId);

    return () => {
      plantPromise.abort();
      // TODO: implement aborting
      // roomsPromise.abort();
      // categoriesPromise.abort();
    };
  }, [ plantId ]);

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
    <React.Fragment>
      <Helmet>
        <title>{ title }</title>
      </Helmet>

      <PlantFormCard
        categories={ categories }
        formLabel="Edit plant"
        initialValues={ initialValues }
        onSubmit={ onPlantUpdate }
        onRemove={ onPlantRemove }
        plantInProgress={ plantInProgress }
        rooms={ rooms }
      />
    </React.Fragment>
  );
};

PlantUpdatePage.propTypes = {
  navigateToPlantList: PropTypes.func.isRequired,
  onPlantError: PropTypes.func.isRequired,
};

export default compose(
  withToastManager,
)(PlantUpdatePage);
