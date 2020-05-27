import React from 'react';
import { Container } from 'reactstrap';
import { Redirect, Switch } from 'react-router-dom';
import Routes from 'constants/Routes';
import CategoriesPage from 'components/categories/CategoriesPage';
import RoomsPage from 'components/rooms/RoomsPage';
import Dashboard from 'components/dashboard/Dashboard';
import PlantsPage from 'pages/plants/PlantsPage';
import NotFound from 'pages/errors/NotFound';
import HelmetRoute from 'components/shared/HelmetRoute';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AuthenticatedBreadcrumbs from 'components/authenticated/AuthenticatedBreadcrumbs';

const AuthenticatedContainer = function () {

  return (
    <HelmetProvider>
      <Container>
        <Helmet titleTemplate="%s – Plantastic" defaultTitle="Plantastic" />
        <AuthenticatedBreadcrumbs />
        <Switch>
          <HelmetRoute path={ Routes.CATEGORIES } render={ () => <CategoriesPage /> } title="Categories" />
          <HelmetRoute path={ Routes.PLANTS } render={ () => <PlantsPage /> } title="Plants" />
          <HelmetRoute path={ Routes.ROOMS } render={ () => <RoomsPage /> } title="Rooms" />
          <HelmetRoute path={ Routes.NOT_FOUND } render={ () => <NotFound /> } title="Page not found" />
          <HelmetRoute exact path={ Routes.ROOT } render={ () => <Dashboard /> } title="Dashboard" />
          <Redirect to={ Routes.NOT_FOUND } />
        </Switch>
      </Container>
    </HelmetProvider>
  );
};

AuthenticatedContainer.propTypes = {};

export default AuthenticatedContainer;

