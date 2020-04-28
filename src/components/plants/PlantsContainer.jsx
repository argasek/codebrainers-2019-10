import { Card, CardBody } from "reactstrap";
import React from "react";
import axios from "axios";
import InProgress from 'components/shared/InProgress';
import Plants from "components/plants/Plants";
import { delay, PLANTS_FETCH_DELAY } from "shared/Debug";
import OperationFailed from 'components/shared/OperationFailed';
import Api from 'constants/Api';
import Plant from 'models/Plant';
import { plainToClass } from 'serializers/Serializer';
import withCategories from 'components/categories/Categories';
import withRooms from 'components/rooms/Rooms';
import { withRoomsPropTypes } from 'proptypes/RoomsPropTypes';
import { withCategoriesPropTypes } from 'proptypes/CategoriesPropTypes';

class PlantsContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      plants: [],
      plantsErrorMessage: undefined,
      plantsSuccess: undefined,
      plantsInProgress: false,
    };
  }

  componentDidMount() {
    const roomsPromise = this.props.fetchRooms();
    const categoriesPromise = this.props.fetchCategories();
    const plantsPromise = this.fetchPlantsDelayed();

    this.setState({ plantsInProgress: true });

    const additionalPromises = Promise.all([
      roomsPromise,
      categoriesPromise,
      plantsPromise,
    ]);

    additionalPromises
      .finally(() => this.setState({ plantsInProgress: false }));

  }

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

  render() {
    const {
      plants,
      plantsErrorMessage,
      plantsInProgress,
      plantsSuccess,
    } = this.state;

    const {
      categories,
      categoriesSuccess,
      rooms,
      roomsSuccess
    } = this.props;

    const totalPlants = plants.length;
    const success = categoriesSuccess && plantsSuccess && roomsSuccess;

    return (
      <Card className="mb-4">
        <CardBody>
          <h3 className="mb-3">List of plants</h3>
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
              categories={ categories }
              plants={ plants }
              rooms={ rooms }
            />
          }
        </CardBody>
      </Card>
    );
  }
}

PlantsContainer.propTypes = {
  ...withRoomsPropTypes,
  ...withCategoriesPropTypes,
};

export default withRooms(withCategories(PlantsContainer));
