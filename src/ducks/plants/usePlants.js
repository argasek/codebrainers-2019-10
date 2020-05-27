import { useDispatch, useSelector } from 'react-redux';
import {
  createPlant,
  fetchPlants,
  removePlantById,
  selectPlants,
  selectPlantsErrorMessage,
  selectPlantsInProgress,
  selectPlantsSuccess,
  updatePlant,
} from 'ducks/plants/plantsSlice';

const usePlants = () => {
  const dispatch = useDispatch();

  return {
    fetchPlants: () => dispatch(fetchPlants()),
    plants: useSelector(selectPlants),
    plantsCreatePlant: (plant) => dispatch(createPlant(plant)),
    plantsErrorMessage: useSelector(selectPlantsErrorMessage),
    plantsInProgress: useSelector(selectPlantsInProgress),
    plantsRemovePlant: (plantId) => dispatch(removePlantById(plantId)),
    plantsSuccess: useSelector(selectPlantsSuccess),
    plantsUpdatePlant: (plant) => dispatch(updatePlant(plant)),
  };

};

export default usePlants;