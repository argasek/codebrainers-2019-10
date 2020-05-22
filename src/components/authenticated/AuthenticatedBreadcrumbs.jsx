import BreadcrumbItem from 'components/breadcrumbs/BreadcrumbItem';
import React from 'react';
import Routes from 'constants/Routes';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import { Breadcrumb } from 'reactstrap';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

const PlantEditBreadcrumb = ({ location, match }) => {
  return 'Edit'; // + match.params.plantId;
};

const routes = [
  {
    path: Routes.PLANTS_CREATE,
    breadcrumb: 'Create'
  },
  {
    path: Routes.PLANT_EDIT,
    breadcrumb: PlantEditBreadcrumb
  }
];

const AuthenticatedBreadcrumbs = ({ breadcrumbs, location }) => (
  <Breadcrumb tag="nav" listTag="div">
    {
      breadcrumbs.map(({ breadcrumb, match }) =>
        <BreadcrumbItem active={ match.url === location.pathname } url={ match.url } key={ breadcrumb.key }>
          { breadcrumb }
        </BreadcrumbItem>
      )
    }
  </Breadcrumb>
);

const options = {
  excludePaths: [
    Routes.PLANT
  ]
};

AuthenticatedBreadcrumbs.propTypes = {};

export default compose(
  withRouter,
  withBreadcrumbs(routes, options),
)(AuthenticatedBreadcrumbs);

