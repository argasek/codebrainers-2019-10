import React from 'react';
import { Container } from 'reactstrap';
import { Route, Switch } from 'react-router-dom';
import Routes from 'constants/Routes';
import PlantsContainer from 'components/plants/PlantsContainer';
import CategoriesContainer from 'components/categories/CategoriesContainer';
import Rooms from 'components/rooms/Rooms';
import PlantCreate from 'components/plants/PlantCreate';
import AuthenticatedDashboard from 'components/authenticated/AuthenticatedDashboard';

class AuthenticatedContainer extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      rooms: []
    };
  }

  fetchRooms = () => {

  };

  render() {
    const {
      rooms,
    } = this.state;

    const fetchRooms = this.fetchRooms;

    return (
      <Container>
        <Switch>
          <Route exact path={ Routes.ROOT }>
            <AuthenticatedDashboard />
          </Route>
          <Route path={ Routes.PLANTS }>
            <PlantsContainer
              rooms={ rooms }
              fetchRooms={ fetchRooms }
            />
            <PlantCreate />
          </Route>
          <Route path={ Routes.CATEGORIES }>
            <CategoriesContainer />
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
