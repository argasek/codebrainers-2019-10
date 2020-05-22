import categoriesReducers from 'ducks/categories/categoriesReducers';
import plantsReducers from 'ducks/plants/plantsReducers';
import roomsReducers from 'ducks/rooms/roomsReducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  categories: categoriesReducers,
  plants: plantsReducers,
  rooms: roomsReducers,
});

export default rootReducer;