import React from 'react';
import { Container } from 'reactstrap';
import { Route, Switch } from 'react-router-dom';
import Routes from 'constants/Routes';
import PlantsContainer from 'components/plants/PlantsContainer';
import CategoriesContainer from 'components/categories/CategoriesContainer';
import RoomsContainer from 'components/rooms/RoomsContainer';
import AuthenticatedDashboard from 'components/authenticated/AuthenticatedDashboard';

class AuthenticatedContainer extends React.PureComponent {

  render() {

    return (
      <Container>
        <Switch>
          <Route exact path={ Routes.ROOT }>
            <AuthenticatedDashboard />
          </Route>
          <Route path={ Routes.PLANTS }>
            <PlantsContainer />
          </Route>
          <Route path={ Routes.CATEGORIES }>
            <CategoriesContainer />
          </Route>
          <Route path={ Routes.ROOMS }>
            <RoomsContainer />
          </Route>
        </Switch>
      </Container>
    );
  }
}

export default AuthenticatedContainer;

AuthenticatedContainer.propTypes = {};
