import { configureStore } from '@reduxjs/toolkit';
import rootReducer from 'ducks/rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

export default store;