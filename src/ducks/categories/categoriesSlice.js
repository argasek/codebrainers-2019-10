import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Api } from 'services/Api';
import { plainToClass } from 'serializers/Serializer';
import Category from 'models/Category';

const SLICE_NAME = 'categories';

const STATE_CATEGORIES = 'categories';
const STATE_ERROR_MESSAGE = 'inProgress';
const STATE_IN_PROGRESS = 'errorMessage';
const STATE_SUCCESS = 'success';

const setterReducer = (stateKey) => (state, action) => {
  state[stateKey] = action.payload;
};
const stateSelector = (stateKey) => state => state[SLICE_NAME][stateKey];

export const categoriesSlice = createSlice({
  name: SLICE_NAME,
  initialState: {
    [STATE_CATEGORIES]: [],
    [STATE_ERROR_MESSAGE]: '',
    [STATE_IN_PROGRESS]: false,
    [STATE_SUCCESS]: undefined,
  },
  reducers: {
    setCategories: setterReducer(STATE_CATEGORIES),
    setErrorMessage: setterReducer(STATE_ERROR_MESSAGE),
    setInProgress: setterReducer(STATE_IN_PROGRESS),
    setSuccess: setterReducer(STATE_SUCCESS),
  },
});

export const {
  setCategories,
  setErrorMessage,
  setInProgress,
  setSuccess,
} = categoriesSlice.actions;

export const fetchCategories = () => async dispatch => {
  dispatch(setInProgress(true));
  dispatch(setSuccess(undefined));

  try {
    const response = await axios.get(Api.CATEGORIES);
    const data = response.data;

    const categories = data.map(item => plainToClass(Category, item));
    const errorMessage = '';
    const success = true;

    dispatch(setSuccess(success));
    dispatch(setErrorMessage(errorMessage));
    dispatch(setCategories(categories));
  } catch (error) {
    const errorMessage = error.message;
    const success = false;

    dispatch(setSuccess(success));
    dispatch(setErrorMessage(errorMessage));
  } finally {
    dispatch(setInProgress(false));
  }
};

export const selectCategories = stateSelector(STATE_CATEGORIES);
export const selectCategoriesErrorMessage = stateSelector(STATE_ERROR_MESSAGE);
export const selectCategoriesInProgress = stateSelector(STATE_IN_PROGRESS);
export const selectCategoriesSuccess = stateSelector(STATE_SUCCESS);

export default categoriesSlice.reducer;
