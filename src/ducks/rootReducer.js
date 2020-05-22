import categoriesReducer from 'ducks/categories/categoriesSlice';
import plantsReducers from 'ducks/plants/plantsReducers';
import roomsReducer from 'ducks/rooms/roomsSlice';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  plants: plantsReducers,
  rooms: roomsReducer,
});

export default rootReducer;