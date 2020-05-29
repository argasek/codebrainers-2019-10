import React, { useEffect, useState } from 'react';
import PlantList from 'components/plants/PlantList';
import useCategories from 'ducks/categories/useCategories';
import { generatePath, useHistory } from 'react-router-dom';
import Routes from 'constants/Routes';
import useRooms from 'ducks/rooms/useRooms';
import usePlants from 'ducks/plants/usePlants';
import Progress from 'constants/Progress';
import { usePlantsIndexSuccess } from 'pages/plants/hooks/PlantsIndexHooks';
import usePlant from 'ducks/plant/usePlant';

const PlantsIndexPage = () => {
  const history = useHistory();

  const {
    categories,
    fetchCategories,
  } = useCategories();

  const {
    rooms,
    fetchRooms,
  } = useRooms();

  const {
    fetchPlants,
    plants,
    plantsErrorMessage,
    plantsSuccess,
  } = usePlants();

  const {
    setPlant
  } = usePlant();

  const [ inProgress, setInProgress ] = useState(Progress.IDLE);
  const success = usePlantsIndexSuccess();

  useEffect(() => {
    const roomsPromise = fetchRooms();
    const categoriesPromise = fetchCategories();
    const plantsPromise = fetchPlants();

    setInProgress(Progress.RUNNING);

    const allPromises = Promise.all([
      roomsPromise,
      categoriesPromise,
      plantsPromise,
    ]);

    allPromises
      .finally(() => setInProgress(Progress.IDLE));

  }, []);

  const onEdit = (plant) => {
    const plantId = plant.id;
    const path = generatePath(Routes.PLANT_EDIT, { plantId });
    // TODO: exercise. Why we cannot push plant object via history's state?
    setPlant(plant);
    history.push(path);
  };

  return (
    <PlantList
      categories={ categories }
      onEdit={ onEdit }
      plants={ plants }
      errorMessage={ plantsErrorMessage }
      plantsInProgress={ inProgress }
      plantsSuccess={ plantsSuccess }
      rooms={ rooms }
      success={ success }
    />
  );
};

PlantsIndexPage.propTypes = {};

export default PlantsIndexPage;
