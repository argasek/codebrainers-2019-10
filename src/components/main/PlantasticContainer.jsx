import React from "react";
import { Container } from "reactstrap";
import { Route, Switch } from "react-router-dom";
import { ROUTE_CATEGORIES, ROUTE_PLANTS, ROUTE_ROOMS } from "constants/Routes";
import PlantsContainer from "components/plants/PlantsContainer";
import Categories from "components/categories/Categories";
import Rooms from "components/rooms/Rooms";
import PlantCreate from 'components/plants/PlantCreate';
import axios from "axios";

const CATEGORIES_FETCH_DELAY = 500;

class PlantasticContainer extends React.PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      categoriesInProgress: false,
      categoriesSuccess: undefined,
      categories: [],
    };
  }

  componentDidMount() {
  }

  fetchCategories = () => {
    const requestUrl = 'http://gentle-tor-07382.herokuapp.com/categories/';
    const categoriesInProgress = true;
    console.log('Typeof this.setState: ' + typeof this.setState);
    this.setState({ categoriesInProgress });
    return this.props.delayFetch(CATEGORIES_FETCH_DELAY, (resolve, reject) => {
      axios.get(requestUrl)
        .then((response) => {
          const data = response.data;
          const categories = data.map((item) => item.name);
          const categoriesSuccess = true;
          this.setState({ categories, categoriesSuccess });
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
        })
    });
  }

  render() {
    const {
      delayFetch,
    } = this.props;

    const {
      categoriesInProgress,
      categoriesSuccess,
      categories,
    } = this.state;

    return (
      <Container>
        <Switch>
          <Route exact path={ ROUTE_PLANTS }>
            <PlantCreate />
            <PlantsContainer
              delayFetch={ delayFetch }
            />
          </Route>
          <Route path={ ROUTE_CATEGORIES }>
            <Categories
              delayFetch={ delayFetch }
              fetchCategories={ this.fetchCategories }
              categoriesInProgress={ categoriesInProgress }
              categoriesSuccess={ categoriesSuccess }
              categories={ categories }
            />
          </Route>
          <Route path={ ROUTE_ROOMS }>
            <Rooms/>
          </Route>
        </Switch>
      </Container>
    )
  }
}

export default PlantasticContainer;
