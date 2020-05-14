import React from 'react';
import { Container } from 'reactstrap';
import { Route, Switch } from 'react-router-dom';
import Routes from 'constants/Routes';
import CategoriesContainer from 'components/categories/CategoriesContainer';
import RoomsContainer from 'components/rooms/RoomsContainer';
import Dashboard from 'components/dashboard/Dashboard';
import PlantsPage from 'pages/plants/PlantsPage';

const AuthenticatedContainer = function () {

  return (
    <Container>
      <Switch>
        <Route path={ Routes.CATEGORIES }>
          <CategoriesContainer />
        </Route>
        <Route path={ Routes.PLANTS }>
          <PlantsPage />
        </Route>
        <Route path={ Routes.ROOMS }>
          <RoomsContainer />
        </Route>
        <Route exact path={ Routes.ROOT }>
          <Dashboard />
        </Route>
      </Switch>
    </Container>
  );
};

AuthenticatedContainer.propTypes = {};

export default AuthenticatedContainer;

