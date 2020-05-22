import axios from 'axios';
import HelmetRoute from 'components/shared/HelmetRoute';
import memoize from 'lodash-es/memoize';
import Plant from 'models/Plant';
import PlantFormCard from 'components/plants/PlantFormCard';
import PlantFormFields from 'components/plants/plant-form/constants/PlantFormFields';
import PlantList from 'components/plants/PlantList';
import React from 'react';
import Routes from 'constants/Routes';
import update from 'immutability-helper';
import withCategories from 'components/categories/Categories';
import withRooms from 'components/rooms/Rooms';
import { Api } from 'services/Api';
import { compose } from 'redux';
import { delay, PLANTS_FETCH_DELAY } from 'shared/Debug';
import { generatePath, matchPath, Switch, withRouter } from 'react-router-dom';
import { plainToClass } from 'serializers/Serializer';
import { Toast } from 'components/shared/Toast';
import { withCategoriesPropTypes } from 'proptypes/CategoriesPropTypes';
import { withPlant } from 'components/plants/api/WithPlant';
import { withPlantPropTypes } from 'proptypes/WithPlantPropTypes';
import { withRoomsPropTypes } from 'proptypes/RoomsPropTypes';
import { withToastManager } from 'react-toast-notifications';

class PlantsPage extends React.PureComponent {
  state = {
    plants: [],
    plantsErrorMessage: undefined,
    plantsSuccess: undefined,
    plantsInProgress: false,
  };

  constructor(props) {
    super(props);
    this.toast = new Toast(props.toastManager);
  }

  componentDidMount() {
    const roomsPromise = this.props.fetchRooms();
    const categoriesPromise = this.props.fetchCategories();
    const plantsPromise = this.fetchPlantsDelayed();

    plantsPromise
      .then(() => this.updateInitialValuesFromLocation(this.props.location));

    this.setState({ plantsInProgress: true });

    const additionalPromises = Promise.all([
      roomsPromise,
      categoriesPromise,
      plantsPromise,
    ]);

    additionalPromises
      .finally(() => this.setState({ plantsInProgress: false }));

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { location } = this.props;
    if (prevProps.location !== location) {
      this.updateInitialValuesFromLocation(location);
    }
  }

  updateInitialValuesFromLocation = (location) => {
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
      const plants = this.state.plants;
      const plant = plants.find((item) => item.id === plantId);
      if (plant instanceof Plant) {
        const initialValues = getInitialValues(plant);
        this.setState({ initialValues });
      } else {
        this.props.history.push(Routes.NOT_FOUND);
      }
    }

    if (createPath !== null) {
      const plant = new Plant();
      const initialValues = getInitialValues(plant);
      this.setState({ initialValues });
    }

  };

  fetchPlants = (resolve, reject) => {
    return axios.get(Api.PLANTS)
      .then((response) => {
        const data = response.data;
        const plants = data
          .map(item => plainToClass(Plant, item));

        const plantsErrorMessage = '';
        const plantsSuccess = true;
        this.setState({
          plants,
          plantsSuccess,
          plantsErrorMessage,
        });
        console.log('Fetched plants');
        resolve();
      })
      .catch((error) => {
        const plantsErrorMessage = error.message;
        const plantsSuccess = false;
        this.setState({
          plantsErrorMessage,
          plantsSuccess,
        });
        reject();
      });
  };

  fetchPlantsDelayed() {
    console.log('Method PlantsContainer.fetchPlantsDelayed() fired');
    return delay(PLANTS_FETCH_DELAY, this.fetchPlants);
  }

  /**
   *
   * @param {number} id
   * @return {number}
   */
  getPlantIndexById = id => this.state.plants.findIndex((item) => item.id === id);

  navigateToPlantList = () => {
    this.props.history.push(Routes.PLANTS);
  };

  onPlantSuccess = (message, response) => {
    this.toast.success(message);
    return response;
  };

  onPlantError = (error, title) => {
    // TODO: improve error handling
    // const api = new Api();
    // const { errors, status } = api.getErrorsFromApi(error);
    const message = error.message;
    this.toast.error(message, title);
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

    const promise = this.props.createPlant(plant)
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

    const promise = this.props.removePlant(plant)
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

    const promise = this.props.updatePlant(plant)
      .then((response) => this.onPlantSuccess(successMessage, response))
      .then(updatePlantList)
      .then(this.navigateToPlantList)
      .catch((error) => this.onPlantError(error, errorTitle));

    return promise;
  };

  onEdit = (plantId) => {
    const path = generatePath(Routes.PLANT_EDIT, { plantId });
    this.props.history.push(path);
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
    } = this.props;

    const success = categoriesSuccess && plantsSuccess && roomsSuccess;

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
