import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPlants,
  selectPlants,
  selectPlantsErrorMessage,
  selectPlantsInProgress,
  selectPlantsSuccess
} from 'ducks/plants/plantsSlice';

const usePlants = () => {
  const dispatch = useDispatch();

  return {
    plants: useSelector(selectPlants),
    plantsErrorMessage: useSelector(selectPlantsErrorMessage),
    plantsInProgress: useSelector(selectPlantsInProgress),
    plantsSuccess: useSelector(selectPlantsSuccess),
    fetchPlants: () => dispatch(fetchPlants())
  };

};

export default usePlants;