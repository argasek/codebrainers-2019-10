import React from "react";
import { Container } from "reactstrap";
import { Route, Switch } from "react-router-dom";
import { ROUTE_CATEGORIES, ROUTE_PLANTS, ROUTE_ROOMS } from "constants/Routes";
import PlantsContainer from "components/plants/PlantsContainer";
import Categories from "components/categories/Categories";
import Rooms from "components/rooms/Rooms";
import PlantCreate from 'components/plants/PlantCreate';

class PlantasticContainer extends React.PureComponent {

  render() {
    const {
      delayFetch,
    } = this.props;

    return (
      <Container>
        <Switch>
          <Route exact path={ ROUTE_PLANTS }>
            <PlantCreate/>
            <PlantsContainer
              delayFetch={ delayFetch }
            />
          </Route>
          <Route path={ ROUTE_CATEGORIES }>
            <Categories
              delayFetch={ delayFetch }
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
