import React from 'react';
import { Container } from 'reactstrap';
import { Route, Switch } from 'react-router-dom';
import { ROUTE_CATEGORIES, ROUTE_PLANTS, ROUTE_ROOMS } from 'constants/Routes';
import PlantsContainer from 'components/plants/PlantsContainer';
import Categories from 'components/categories/Categories';
import Rooms from 'components/rooms/Rooms';
import PlantCreate from 'components/plants/PlantCreate';
import axios from 'axios';
import { CATEGORIES_FETCH_DELAY, delay } from 'shared/Debug';

class PlantasticContainer extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
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
    const categoriesInProgress = true;
    const categories = [];
    this.setState({ categories, categoriesInProgress });

    return axios.get(requestUrl)
      .then((response) => {
        const data = response.data;
        const categories = data.map((item) => ({
          id: item.id,
          name: item.name
        }));
        const categoriesSuccess = true;
        this.setState({ categories, categoriesSuccess });
        console.log('Fetched categories');
        resolve();
      })
      .catch((error) => {
        const categoriesSuccess = false;
        this.setState({ categoriesSuccess });
        reject();
      })
      .finally(() => {
        const categoriesInProgress = false;
        this.setState({ categoriesInProgress });
      });
  };

  fetchCategoriesDelayed = () => {
    console.log('Method PlantasticContainer.fetchCategoriesDelayed() fired');
    const promise = delay(CATEGORIES_FETCH_DELAY, this.fetchCategories);
    return promise;
  };

  render() {
    const {
      delayFetch,
    } = this.props;

    const {
      categoriesInProgress,
      categoriesSuccess,
      categories,
    } = this.state;

    console.log(categories);

    return (
      <Container>
        <Switch>
          <Route exact path={ ROUTE_PLANTS }>
            <PlantCreate />
            <PlantsContainer
              categories={ categories }
              fetchCategories={ this.fetchCategoriesDelayed }
            />
          </Route>
          <Route path={ ROUTE_CATEGORIES }>
            <Categories
              delayFetch={ delayFetch }
              fetchCategories={ this.fetchCategoriesDelayed }
              categoriesInProgress={ categoriesInProgress }
              categoriesSuccess={ categoriesSuccess }
              categories={ categories }
            />
          </Route>
          <Route path={ ROUTE_ROOMS }>
            <Rooms />
          </Route>
        </Switch>
      </Container>
    );
  }
}

export default PlantasticContainer;

PlantasticContainer.propTypes = {};
