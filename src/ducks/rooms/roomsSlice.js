import axios from 'axios';
import Room from 'models/Room';
import { Api } from 'services/Api';
import { createSlice } from '@reduxjs/toolkit';
import { plainToClass } from 'serializers/Serializer';
import { setterReducer, sliceStateSelector } from 'ducks/utils';

const SLICE_NAME = 'rooms';

const STATE_ROOMS = 'rooms';
const STATE_ERROR_MESSAGE = 'errorMessage';
const STATE_IN_PROGRESS = 'inProgress';
const STATE_SUCCESS = 'success';

const stateSelector = sliceStateSelector(SLICE_NAME);

export const roomsSlice = createSlice({
  name: SLICE_NAME,
  initialState: {
    [STATE_ROOMS]: [],
    [STATE_ERROR_MESSAGE]: '',
    [STATE_IN_PROGRESS]: false,
    [STATE_SUCCESS]: undefined,
  },
  reducers: {
    setRooms: setterReducer(STATE_ROOMS),
    setErrorMessage: setterReducer(STATE_ERROR_MESSAGE),
    setInProgress: setterReducer(STATE_IN_PROGRESS),
    setSuccess: setterReducer(STATE_SUCCESS),
  },
});

export const {
  setRooms,
  setErrorMessage,
  setInProgress,
  setSuccess,
} = roomsSlice.actions;

export const fetchRooms = () => async dispatch => {
  dispatch(setInProgress(true));
  dispatch(setSuccess(undefined));

  try {
    const response = await axios.get(Api.ROOMS);
    const data = response.data;

    const rooms = data.map(item => plainToClass(Room, item));
    const errorMessage = '';
    const success = true;

    dispatch(setSuccess(success));
    dispatch(setErrorMessage(errorMessage));
    dispatch(setRooms(rooms));
  } catch (error) {
    const errorMessage = error.message;
    const success = false;

    dispatch(setSuccess(success));
    dispatch(setErrorMessage(errorMessage));
  } finally {
    dispatch(setInProgress(false));
  }
};

export const selectRooms = stateSelector(STATE_ROOMS);
export const selectRoomsErrorMessage = stateSelector(STATE_ERROR_MESSAGE);
export const selectRoomsInProgress = stateSelector(STATE_IN_PROGRESS);
export const selectRoomsSuccess = stateSelector(STATE_SUCCESS);

export default roomsSlice.reducer;
