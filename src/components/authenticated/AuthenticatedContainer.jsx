import React from 'react';
import { Container } from 'reactstrap';
import { Route, Switch } from 'react-router-dom';
import Routes from 'constants/Routes';
import PlantsContainer from 'components/plants/PlantsContainer';
import Categories from 'components/categories/Categories';
import Rooms from 'components/rooms/Rooms';
import PlantCreate from 'components/plants/PlantCreate';
import axios from 'axios';
import { CATEGORIES_FETCH_DELAY, delay } from 'shared/Debug';
import Api from 'constants/Api';
import AuthenticatedDashboard from 'components/authenticated/AuthenticatedDashboard';
import { plainToClass } from 'serializers/Serializer';
import Category from 'models/Category';

class AuthenticatedContainer extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      categoriesErrorMessage: '',
      categoriesInProgress: false,
      categoriesSuccess: undefined,
      categories: [],
      rooms: []
    };
  }

  /**
   *
   * @param {function} resolve
   * @param {function} reject
   * @returns {Promise}
   */
  fetchCategories = (resolve, reject) => {
    return axios.get(Api.CATEGORIES)
      .then((response) => this.fetchCategoriesSuccess(response, resolve))
      .catch((error) => this.fetchCategoriesFailure(error, reject))
      .finally(this.fetchCategoriesFinally);
  };

  fetchCategoriesDelayed = () => {
    console.log('Method AuthenticatedContainer.fetchCategoriesDelayed() fired');

    const categories = [];
    const categoriesInProgress = true;
    this.setState({ categories, categoriesInProgress });

    const promise = delay(CATEGORIES_FETCH_DELAY, this.fetchCategories);
    return promise;
  };

  fetchCategoriesFailure = (error, reject) => {
    const categoriesSuccess = false;
    const categoriesErrorMessage = error.message;

    this.setState({
      categoriesErrorMessage,
      categoriesSuccess,
    });

    reject();
  };

  fetchCategoriesFinally = () => {
    const categoriesInProgress = false;
    this.setState({ categoriesInProgress });
  };

  fetchCategoriesSuccess = (response, resolve) => {
    const data = response.data;

    const categories = data.map(item => plainToClass(Category, item));
    const categoriesSuccess = true;
    const categoriesErrorMessage = '';

    this.setState({
      categories,
      categoriesErrorMessage,
      categoriesSuccess,
    });

    console.log('Fetched categories');

    resolve();
  };

  fetchRooms = () => {

  };

  render() {
    const {
      categoriesErrorMessage,
      categoriesInProgress,
      categoriesSuccess,
      categories,
      rooms,
    } = this.state;

    const fetchCategories = this.fetchCategoriesDelayed;
    const fetchRooms = this.fetchRooms;

    return (
      <Container>
        <Switch>
          <Route exact path={ Routes.ROOT }>
            <AuthenticatedDashboard />
          </Route>
          <Route path={ Routes.PLANTS }>
            <PlantsContainer
              categories={ categories }
              rooms={ rooms }
              fetchCategories={ fetchCategories }
              fetchRooms={ fetchRooms }
            />
            <PlantCreate />
          </Route>
          <Route path={ Routes.CATEGORIES }>
            <Categories
              categories={ categories }
              categoriesErrorMessage={ categoriesErrorMessage }
              categoriesInProgress={ categoriesInProgress }
              categoriesSuccess={ categoriesSuccess }
              fetchCategories={ fetchCategories }
            />
          </Route>
          <Route path={ Routes.ROOMS }>
            <Rooms />
          </Route>
        </Switch>
      </Container>
    );
  }
}

export default AuthenticatedContainer;

AuthenticatedContainer.propTypes = {};
