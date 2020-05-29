import HelmetRoute from 'components/shared/HelmetRoute';
import React from 'react';
import Routes from 'constants/Routes';
import { compose } from 'redux';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Toast } from 'components/shared/Toast';
import { withToastManager } from 'react-toast-notifications';
import PlantsIndexPage from 'pages/plants/PlantsIndexPage';
import PlantCreatePage from 'pages/plants/PlantCreatePage';
import PlantUpdatePage from 'pages/plants/PlantUpdatePage';

const PlantsPage = (props) => {
  const history = useHistory();
  const { toastManager } = props;

  const toast = new Toast(toastManager);

  const navigateToPlantList = () => {
    history.push(Routes.PLANTS);
  };

  const onPlantError = (action, title) => {
    // If payload is present, there were some validation errors.
    if (action.payload) {
      return action.payload;
    }
    const error = action.error;
    const message = error.message;
    toast.error(message, title);
    return action;
  };


  return (
    <Switch>
      <HelmetRoute
        exact
        path={ Routes.PLANTS }
        render={ () => (
          <PlantsIndexPage />
        ) }
        title="List of plants"
      />
      <HelmetRoute
        path={ [ Routes.PLANTS_CREATE ] }
        render={ () => (
          <PlantCreatePage
            navigateToPlantList={ navigateToPlantList }
            onPlantError={ onPlantError }
          />
        ) }
        title="Create plant"
      />
      <Route
        path={ Routes.PLANT_EDIT }
        render={ () => (
          <PlantUpdatePage
            navigateToPlantList={ navigateToPlantList }
            onPlantError={ onPlantError }
          />
        ) }
      />
    </Switch>
  );
};

PlantsPage.propTypes = {};

export default compose(
  withToastManager,
)(PlantsPage);
