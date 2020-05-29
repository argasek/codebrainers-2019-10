import axios from 'axios';
import Plant from 'models/Plant';
import { Api } from 'services/Api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { classToPlain, plainToClass } from 'serializers/Serializer';
import { setterReducer, sliceStateSelector } from 'ducks/utils';
import get from 'lodash-es/get';
import Success from 'constants/Success';

const SLICE_NAME = 'plant';
const SLICE_CREATE = `${ SLICE_NAME }/create`;
const SLICE_FETCH_BY_ID = `${ SLICE_NAME }/fetchById`;
const SLICE_REMOVE_BY_ID = `${ SLICE_NAME }/removeById`;
const SLICE_UPDATE = `${ SLICE_NAME }/update`;

const STATE_PLANT = 'plant';
const STATE_ERROR_MESSAGE = 'errorMessage';
const STATE_IN_PROGRESS = 'inProgress';
const STATE_SUCCESS = 'success';

export const PLANT_PROGRESS_CREATE = 'create';
export const PLANT_PROGRESS_FETCH = 'fetch';
export const PLANT_PROGRESS_UPDATE = 'update';
export const PLANT_PROGRESS_REMOVE = 'remove';
export const PLANT_PROGRESS_STOPPED = '';

const stateSelector = sliceStateSelector(SLICE_NAME);

const createCancelToken = (signal) => {
  const source = axios.CancelToken.source();
  signal.addEventListener('abort', () => {
    source.cancel();
  });
  return source.token;
};

const getCancelOptions = (signal) => {
  const cancelToken = createCancelToken(signal);
  const options = { cancelToken };
  return options;
};

const getUpsertData = (plant, signal) => {
  const options = getCancelOptions(signal);
  const path = get(plant, 'url', '') || Api.PLANTS;
  const data = classToPlain(plant);
  return { data, options, path };
};

const api = new Api();

const getPathByPlantId = (plantId) => {
  const path = api.getPath(Api.PLANT, { plantId });
  return path;
};

const handleApiError = (error, rejectWithValue) => {
  if (error.response) {
    return rejectWithValue(api.getErrorsFromApi(error));
  }
  throw error;
};

export const createPlant = createAsyncThunk(
  SLICE_CREATE,
  /**
   * @param {Plant} plant
   * @param {function} rejectWithValue
   * @param signal
   */
  async (plant, { rejectWithValue, signal }) => {
    try {
      const { data, options, path } = getUpsertData(plant, signal);
      const response = await axios.post(path, data, options);
      const result = plainToClass(Plant, response.data);
      return result;
    } catch (error) {
      return handleApiError(error, rejectWithValue);
    }
  }
);

export const fetchPlantById = createAsyncThunk(
  SLICE_FETCH_BY_ID,
  /**
   *
   * @param {number} plantId
   * @param rejectWithValue
   * @param signal
   * @return {Promise<unknown>}
   */
  async (plantId, { rejectWithValue, signal }) => {
    try {
      const options = getCancelOptions(signal);
      const path = getPathByPlantId(plantId);
      const response = await axios.get(path, options);
      const data = response.data;
      const plant = plainToClass(Plant, data);
      return plant;
    } catch (error) {
      return handleApiError(error, rejectWithValue);
    }
  }
);

export const removePlantById = createAsyncThunk(
  SLICE_REMOVE_BY_ID,
  /**
   *
   * @param {number} plantId
   * @param rejectWithValue
   * @param signal
   */
  async (plantId, { rejectWithValue, signal }) => {
    try {
      const options = getCancelOptions(signal);
      const path = getPathByPlantId(plantId);
      const response = await axios.delete(path, options);
      return response.data;
    } catch (error) {
      return handleApiError(error, rejectWithValue);
    }
  }
);

export const updatePlant = createAsyncThunk(
  SLICE_UPDATE,
  /**
   *
   * @param {Plant} plant
   * @param rejectWithValue
   * @param signal
   */
  async (plant, { rejectWithValue, signal }) => {
    try {
      const { data, options, path } = getUpsertData(plant, signal);
      const response = await axios.put(path, data, options);
      const result = plainToClass(Plant, response.data);
      return result;
    } catch (error) {
      return handleApiError(error, rejectWithValue);
    }
  }
);

const inProgressReducerCreator = (currentActionType, nextActionType) => (state, action) => {
  if (state[STATE_IN_PROGRESS] === currentActionType) {
    state[STATE_IN_PROGRESS] = nextActionType;
    // state.currentRequestId = action.meta.requestId;
  }
};

const setPlantReducer = setterReducer(STATE_PLANT);
const setSuccessReducer = setterReducer(STATE_SUCCESS);

export const plantSlice = createSlice({
  name: SLICE_NAME,
  initialState: {
    [STATE_PLANT]: new Plant(),
    [STATE_ERROR_MESSAGE]: '',
    [STATE_IN_PROGRESS]: PLANT_PROGRESS_STOPPED,
    [STATE_SUCCESS]: Success.UNKNOWN,
  },
  reducers: {
    setPlant: setPlantReducer,
    setErrorMessage: setterReducer(STATE_ERROR_MESSAGE),
    setInProgress: setterReducer(STATE_IN_PROGRESS),
    setSuccess: setSuccessReducer,
  },
  extraReducers: {
    [fetchPlantById.pending]: inProgressReducerCreator(PLANT_PROGRESS_STOPPED, PLANT_PROGRESS_FETCH),
    [createPlant.pending]: inProgressReducerCreator(PLANT_PROGRESS_STOPPED, PLANT_PROGRESS_CREATE),
    [removePlantById.pending]: inProgressReducerCreator(PLANT_PROGRESS_STOPPED, PLANT_PROGRESS_REMOVE),
    [updatePlant.pending]: inProgressReducerCreator(PLANT_PROGRESS_STOPPED, PLANT_PROGRESS_UPDATE),

    [fetchPlantById.rejected]: inProgressReducerCreator(PLANT_PROGRESS_FETCH, PLANT_PROGRESS_STOPPED),
    [createPlant.rejected]: inProgressReducerCreator(PLANT_PROGRESS_CREATE, PLANT_PROGRESS_STOPPED),
    [removePlantById.rejected]: inProgressReducerCreator(PLANT_PROGRESS_REMOVE, PLANT_PROGRESS_STOPPED),
    [updatePlant.rejected]: inProgressReducerCreator(PLANT_PROGRESS_UPDATE, PLANT_PROGRESS_STOPPED),

    [fetchPlantById.fulfilled]: (state, action) => {
      inProgressReducerCreator(PLANT_PROGRESS_FETCH, PLANT_PROGRESS_STOPPED)(state);
      setSuccessReducer(state, { payload: Success.OK });
      setPlantReducer(state, action);
    },
    [createPlant.fulfilled]: inProgressReducerCreator(PLANT_PROGRESS_CREATE, PLANT_PROGRESS_STOPPED),
    [removePlantById.fulfilled]: inProgressReducerCreator(PLANT_PROGRESS_REMOVE, PLANT_PROGRESS_STOPPED),
    [updatePlant.fulfilled]: inProgressReducerCreator(PLANT_PROGRESS_UPDATE, PLANT_PROGRESS_STOPPED),
  }
});

export const {
  setPlant,
  setErrorMessage,
  setInProgress,
  setSuccess,
} = plantSlice.actions;

export const selectPlant = stateSelector(STATE_PLANT);
export const selectPlantErrorMessage = stateSelector(STATE_ERROR_MESSAGE);
export const selectPlantInProgress = stateSelector(STATE_IN_PROGRESS);
export const selectPlantSuccess = stateSelector(STATE_SUCCESS);

export default plantSlice.reducer;
