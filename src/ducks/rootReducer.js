import categoriesReducer from 'ducks/categories/categoriesSlice';
import plantsReducers from 'ducks/plants/plantsReducers';
import roomsReducers from 'ducks/rooms/roomsReducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  plants: plantsReducers,
  rooms: roomsReducers,
});

export default rootReducer;