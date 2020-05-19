import React from 'react';
import { Container } from 'reactstrap';
import { Redirect, Route, Switch } from 'react-router-dom';
import Routes from 'constants/Routes';
import CategoriesContainer from 'components/categories/CategoriesContainer';
import RoomsContainer from 'components/rooms/RoomsContainer';
import Dashboard from 'components/dashboard/Dashboard';
import PlantsPage from 'pages/plants/PlantsPage';
import NotFound from 'pages/errors/NotFound';

const AuthenticatedContainer = function () {

  return (
    <Container>
      <Switch>
        <Route path={ Routes.CATEGORIES } render={ () => <CategoriesContainer /> } />
        <Route path={ Routes.PLANTS } render={ () => <PlantsPage /> } />
        <Route path={ Routes.ROOMS } render={ () => <RoomsContainer /> } />
        <Route path={ Routes.NOT_FOUND } render={ () => <NotFound /> } />
        <Route exact path={ Routes.ROOT } render={ () => <Dashboard /> } />
        <Redirect to={ Routes.NOT_FOUND } />
      </Switch>
    </Container>
  );
};

AuthenticatedContainer.propTypes = {};

export default AuthenticatedContainer;

