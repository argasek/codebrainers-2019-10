import HelmetRoute from 'components/shared/HelmetRoute';
import memoize from 'lodash-es/memoize';
import Plant from 'models/Plant';
import PlantFormCard from 'components/plants/PlantFormCard';
import PlantFormFields from 'components/plants/plant-form/constants/PlantFormFields';
import PlantList from 'components/plants/PlantList';
import React, { useEffect, useState } from 'react';
import Routes from 'constants/Routes';
import update from 'immutability-helper';
import withCategories from 'components/categories/Categories';
import withRooms from 'components/rooms/Rooms';
import { compose } from 'redux';
import { generatePath, matchPath, Switch, withRouter } from 'react-router-dom';
import { plainToClass } from 'serializers/Serializer';
import { Toast } from 'components/shared/Toast';
import { withCategoriesPropTypes } from 'proptypes/CategoriesPropTypes';
import { withPlant } from 'components/plants/api/WithPlant';
import { withPlantPropTypes } from 'proptypes/WithPlantPropTypes';
import { withRoomsPropTypes } from 'proptypes/RoomsPropTypes';
import { withToastManager } from 'react-toast-notifications';
import useCategories from 'ducks/categories/useCategories';
import useRooms from 'ducks/rooms/useRooms';
import usePlants from 'ducks/plants/usePlants';

const PlantsPage = (props) => {
  const toast = new Toast(props.toastManager);

  const [ initialValues, setInitialValues ] = useState();

  const {
    categories,
    categoriesErrorMessage,
    categoriesInProgress,
    categoriesSuccess,
    fetchCategories,
  } = useCategories();

  const {
    rooms,
    roomsErrorMessage,
    roomsInProgress,
    roomsSuccess,
    fetchRooms,
  } = useRooms();

  const {
    plants,
    plantsErrorMessage,
    plantsInProgress,
    plantsSuccess,
    fetchPlants,
  } = usePlants();

  useEffect(() => {
    const roomsPromise = fetchRooms();
    const categoriesPromise = fetchCategories();
    const plantsPromise = fetchPlants();

    plantsPromise
      .then(() => updateInitialValuesFromLocation(props.location));

    this.setState({ plantsInProgress: true });

    const allPromises = Promise.all([
      roomsPromise,
      categoriesPromise,
      plantsPromise,
    ]);

    allPromises
      .finally(() => this.setState({ plantsInProgress: false }));

  }, []);

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   const { location } = props;
  //   if (prevProps.location !== location) {
  //     this.updateInitialValuesFromLocation(location);
  //   }
  // }

  const updateInitialValuesFromLocation = (location) => {
    const options = {
      exact: false,
      strict: false
    };

    const { pathname } = location;

    const editPath = matchPath(pathname, { ...options, path: Routes.PLANT_EDIT });
    const createPath = matchPath(pathname, { ...options, path: Routes.PLANTS_CREATE });

    const getInitialValues = memoize(PlantFormFields.getInitialValues);

    if (editPath !== null) {
      const plantId = +editPath.params.plantId;
      const plant = plants.find((item) => item.id === plantId);
      if (plant instanceof Plant) {
        const initialValues = getInitialValues(plant);
        this.setState({ initialValues });
      } else {
        props.history.push(Routes.NOT_FOUND);
      }
    }

    if (createPath !== null) {
      const plant = new Plant();
      const initialValues = getInitialValues(plant);
      this.setState({ initialValues });
    }

  };

  /**
   *
   * @param {number} id
   * @return {number}
   */
  getPlantIndexById = id => this.state.plants.findIndex((item) => item.id === id);

  navigateToPlantList = () => {
    props.history.push(Routes.PLANTS);
  };

  onPlantSuccess = (message, response) => {
    toast.success(message);
    return response;
  };

  onPlantError = (error, title) => {
    // TODO: improve error handling
    // const api = new Api();
    // const { errors, status } = api.getErrorsFromApi(error);
    const message = error.message;
    toast.error(message, title);
    return error;
  };

  /**
   * @param {Plant} plant
   */
  onPlantCreate = (plant) => {
    const createPlantOnList = (response) => {
      const { data } = response;
      const plant = plainToClass(Plant, data);
      const plants = update(this.state.plants, { $push: [ plant ] });
      this.setState({ plants });
    };

    const errorTitle = 'Creating of plant failed';
    const successMessage = `Created new plant: ${ plant.name }.`;

    const promise = props.createPlant(plant)
      .then((response) => this.onPlantSuccess(successMessage, response))
      .then(createPlantOnList)
      .then(this.navigateToPlantList)
      .catch((error) => this.onPlantError(error, errorTitle));

    return promise;
  };

  onPlantRemove = () => {
    const id = this.state.initialValues.id;
    const plantIndex = this.getPlantIndexById(id);
    const plant = this.state.plants[plantIndex];

    const removePlantFromList = (plant) => {
      const plantIndex = this.getPlantIndexById(plant.id);
      const plants = update(this.state.plants, { $splice: [ [ plantIndex, 1 ] ] });
      this.setState({ plants });
    };

    const errorTitle = 'Removing of plant failed';
    const successMessage = `Plant ${ plant.name } was removed.`;

    const promise = props.removePlant(plant)
      .then((response) => this.onPlantSuccess(successMessage, response))
      .then(() => removePlantFromList(plant))
      .then(this.navigateToPlantList)
      .catch((error) => this.onPlantError(error, errorTitle));

    return promise;
  };


  /**
   * @param {Plant} plant
   */
  onPlantUpdate = (plant) => {
    const updatePlantList = (response) => {
      const { data } = response;
      const plant = plainToClass(Plant, data);
      const plantIndex = this.state.plants.findIndex((item) => item.id === plant.id);
      const plants = update(this.state.plants, { [plantIndex]: { $set: plant } });
      this.setState({ plants });
    };

    const errorTitle = `Updating of plant failed!`;
    const successMessage = `Saved updates to ${ plant.name }.`;

    const promise = props.updatePlant(plant)
      .then((response) => this.onPlantSuccess(successMessage, response))
      .then(updatePlantList)
      .then(this.navigateToPlantList)
      .catch((error) => this.onPlantError(error, errorTitle));

    return promise;
  };

  onEdit = (plantId) => {
    const path = generatePath(Routes.PLANT_EDIT, { plantId });
    props.history.push(path);
  };

  render() {
    const {
      initialValues,
      plants,
      plantsErrorMessage,
      plantsInProgress,
      plantsSuccess,
    } = this.state;

    const {
      categories,
      categoriesSuccess,
      plantInProgress,
      rooms,
      roomsSuccess
    } = props;

    const success = categoriesSuccess && plantsSuccess && roomsSuccess;
    console.log('---', categoriesSuccess, plantsSuccess, roomsSuccess);

    return (
      <Switch>
        <HelmetRoute
          exact
          path={ Routes.PLANTS }
          render={ () =>
            <PlantList
              categories={ categories }
              onEdit={ this.onEdit }
              plants={ plants }
              plantsErrorMessage={ plantsErrorMessage }
              plantsInProgress={ plantsInProgress }
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
              onSubmit={ this.onPlantCreate }
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
              onSubmit={ this.onPlantUpdate }
              onRemove={ this.onPlantRemove }
              plantInProgress={ plantInProgress }
              rooms={ rooms }
            />
          ) }
          title={ initialValues && initialValues.name }
        />
      </Switch>
    );
  }
}

PlantsPage.propTypes = {
  ...withRoomsPropTypes,
  ...withCategoriesPropTypes,
  ...withPlantPropTypes,
};

export default compose(
  withRooms,
  withCategories,
  withRouter,
  withPlant,
  withToastManager,
)(PlantsPage);
