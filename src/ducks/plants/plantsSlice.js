import axios from 'axios';
import Plant from 'models/Plant';
import { Api } from 'services/Api';
import { createSlice } from '@reduxjs/toolkit';
import { plainToClass } from 'serializers/Serializer';
import { setterReducer, sliceStateSelector } from 'ducks/utils';
import Progress from 'constants/Progress';
import Success from 'constants/Success';

const SLICE_NAME = 'plants';

const STATE_PLANTS = 'plants';
const STATE_ERROR_MESSAGE = 'errorMessage';
const STATE_IN_PROGRESS = 'inProgress';
const STATE_SUCCESS = 'success';

const stateSelector = sliceStateSelector(SLICE_NAME);

export const plantsSlice = createSlice({
  name: SLICE_NAME,
  initialState: {
    [STATE_PLANTS]: [],
    [STATE_ERROR_MESSAGE]: '',
    [STATE_IN_PROGRESS]: Progress.IDLE,
    [STATE_SUCCESS]: Success.UNKNOWN,
  },
  reducers: {
    createPlant: (state, action) => {
      const plants = state[STATE_PLANTS];
      plants.push(action.payload);
    },
    removePlantById: (state, action) => {
      const plant = action.payload;
      const plants = state[STATE_PLANTS];
      // Immutable version
      state[STATE_PLANTS] = plants.filter(item => item.id !== plant.id);
      // How to create mutable version? :)
    },
    setPlants: setterReducer(STATE_PLANTS),
    setErrorMessage: setterReducer(STATE_ERROR_MESSAGE),
    setInProgress: setterReducer(STATE_IN_PROGRESS),
    setSuccess: setterReducer(STATE_SUCCESS),
    updatePlant: (state, action) => {
      const plant = action.payload;
      const plants = state[STATE_PLANTS];
      const { id } = plant;
      state[STATE_PLANTS] = plants.map(item => item.id === id ? plant : item);
    },
  },
});

export const {
  createPlant,
  removePlantById,
  setPlants,
  setErrorMessage,
  setInProgress,
  setSuccess,
  updatePlant,
} = plantsSlice.actions;

export const fetchPlants = () => async dispatch => {
  dispatch(setInProgress(Progress.RUNNING));
  dispatch(setSuccess(Success.UNKNOWN));

  try {
    const response = await axios.get(Api.PLANTS);
    const data = response.data;

    const plants = data.map(item => plainToClass(Plant, item));
    const errorMessage = '';

    dispatch(setSuccess(Success.OK));
    dispatch(setErrorMessage(errorMessage));
    dispatch(setPlants(plants));
  } catch (error) {
    const errorMessage = error.message;

    dispatch(setSuccess(Success.FAIL));
    dispatch(setErrorMessage(errorMessage));
  } finally {
    dispatch(setInProgress(Progress.IDLE));
  }
};

export const selectPlants = stateSelector(STATE_PLANTS);
export const selectPlantsErrorMessage = stateSelector(STATE_ERROR_MESSAGE);
export const selectPlantsInProgress = stateSelector(STATE_IN_PROGRESS);
export const selectPlantsSuccess = stateSelector(STATE_SUCCESS);

export default plantsSlice.reducer;
