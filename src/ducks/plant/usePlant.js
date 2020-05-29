import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPlantById,
  selectPlant,
  selectPlantInProgress,
  selectPlantSuccess,
  setPlant
} from 'ducks/plant/plantSlice';

const usePlant = () => {
  const dispatch = useDispatch();

  return {
    setPlant: (plant) => dispatch(setPlant(plant)),
    plant: useSelector(selectPlant),
    plantInProgress: useSelector(selectPlantInProgress),
    plantSuccess: useSelector(selectPlantSuccess),
    fetchPlant: (plantId) => dispatch(fetchPlantById(plantId)),
  };

};

export default usePlant;