import categoriesReducer from 'ducks/categories/categoriesSlice';
import plantReducer from 'ducks/plant/plantSlice';
import plantsReducer from 'ducks/plants/plantsSlice';
import roomsReducer from 'ducks/rooms/roomsSlice';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  plant: plantReducer,
  plants: plantsReducer,
  rooms: roomsReducer,
});

export default rootReducer;