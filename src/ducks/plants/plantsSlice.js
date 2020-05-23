import axios from 'axios';
import Plant from 'models/Plant';
import { Api } from 'services/Api';
import { createSlice } from '@reduxjs/toolkit';
import { plainToClass } from 'serializers/Serializer';
import { setterReducer, sliceStateSelector } from 'ducks/utils';

const SLICE_NAME = 'plants';

const STATE_PLANTS = 'plants';
const STATE_ERROR_MESSAGE = 'inProgress';
const STATE_IN_PROGRESS = 'errorMessage';
const STATE_SUCCESS = 'success';

const stateSelector = sliceStateSelector(SLICE_NAME);

export const plantsSlice = createSlice({
  name: SLICE_NAME,
  initialState: {
    [STATE_PLANTS]: [],
    [STATE_ERROR_MESSAGE]: '',
    [STATE_IN_PROGRESS]: false,
    [STATE_SUCCESS]: undefined,
  },
  reducers: {
    setPlants: setterReducer(STATE_PLANTS),
    setErrorMessage: setterReducer(STATE_ERROR_MESSAGE),
    setInProgress: setterReducer(STATE_IN_PROGRESS),
    setSuccess: setterReducer(STATE_SUCCESS),
  },
});

export const {
  setPlants,
  setErrorMessage,
  setInProgress,
  setSuccess,
} = plantsSlice.actions;

export const fetchPlants = () => async dispatch => {
  dispatch(setInProgress(true));
  dispatch(setSuccess(undefined));

  try {
    const response = await axios.get(Api.PLANTS);
    const data = response.data;

    const plants = data.map(item => plainToClass(Plant, item));
    const errorMessage = '';
    const success = true;

    dispatch(setSuccess(success));
    dispatch(setErrorMessage(errorMessage));
    dispatch(setPlants(plants));
  } catch (error) {
    const errorMessage = error.message;
    const success = false;

    dispatch(setSuccess(success));
    dispatch(setErrorMessage(errorMessage));
  } finally {
    dispatch(setInProgress(false));
  }
};

export const selectPlants = stateSelector(STATE_PLANTS);
export const selectPlantsErrorMessage = stateSelector(STATE_ERROR_MESSAGE);
export const selectPlantsInProgress = stateSelector(STATE_IN_PROGRESS);
export const selectPlantsSuccess = stateSelector(STATE_SUCCESS);

export default plantsSlice.reducer;
