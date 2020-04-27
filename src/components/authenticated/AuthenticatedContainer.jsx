import React from 'react';
import { Container } from 'reactstrap';
import { Redirect, Route, Switch } from 'react-router-dom';
import Routes from 'constants/Routes';
import PlantsContainer from 'components/plants/PlantsContainer';
import Categories from 'components/categories/Categories';
import Rooms from 'components/rooms/Rooms';
import PlantCreate from 'components/plants/PlantCreate';
import axios from 'axios';
import { CATEGORIES_FETCH_DELAY, delay } from 'shared/Debug';

class AuthenticatedContainer extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      categoriesErrorMessage: '',
      categoriesInProgress: false,
      categoriesSuccess: undefined,
      categories: [],
    };
  }

  /**
   *
   * @param {function} resolve
   * @param {function} reject
   * @returns {Promise}
   */
  fetchCategories = (resolve, reject) => {
    const requestUrl = 'http://gentle-tor-07382.herokuapp.com/categories/';

    return axios.get(requestUrl)
      .then((response) => {
        const data = response.data;
        const categories = data.map((item) => ({
          id: item.id,
          name: item.name
        }));

        const categoriesSuccess = true;
        const categoriesErrorMessage = '';
        this.setState({
          categories,
          categoriesErrorMessage,
          categoriesSuccess,
        });

        console.log('Fetched categories');

        resolve();
      })
      .catch((error) => {
        const categoriesSuccess = false;
        const categoriesErrorMessage = error.message;

        this.setState({
          categoriesErrorMessage,
          categoriesSuccess,
        });

        reject();
      })
      .finally(() => {
        const categoriesInProgress = false;
        this.setState({ categoriesInProgress });
      });
  };

  fetchCategoriesDelayed = () => {
    console.log('Method AuthenticatedContainer.fetchCategoriesDelayed() fired');

    const categories = [];
    const categoriesInProgress = true;
    this.setState({ categories, categoriesInProgress });

    const promise = delay(CATEGORIES_FETCH_DELAY, this.fetchCategories);
    return promise;
  };

  render() {
    const {
      categoriesErrorMessage,
      categoriesInProgress,
      categoriesSuccess,
      categories,
    } = this.state;

    const fetchCategories = this.fetchCategoriesDelayed;

    console.log(categories);

    return (
      <Container>
        <Switch>
          <Route exact path={ Routes.ROOT }>
            <Redirect to={ Routes.PLANTS } />
          </Route>
          <Route path={ Routes.PLANTS }>
            <PlantCreate />
            <PlantsContainer
              categories={ categories }
              fetchCategories={ fetchCategories }
            />
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
