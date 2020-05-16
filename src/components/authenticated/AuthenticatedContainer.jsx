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
        <Route path={ Routes.CATEGORIES } render={ () => <CategoriesContainer /> } />
        <Route path={ Routes.PLANTS } render={ () => <PlantsPage /> } />
        <Route path={ Routes.ROOMS } render={ () => <RoomsContainer /> } />
        <Route exact path={ Routes.ROOT } render={ () => <Dashboard /> } />
      </Switch>
    </Container>
  );
};

AuthenticatedContainer.propTypes = {};

export default AuthenticatedContainer;

