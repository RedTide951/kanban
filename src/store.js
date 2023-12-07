import { configureStore } from '@reduxjs/toolkit';
import columnReducer from './reducers/columnReducer';

const rootReducer = {
  columns: columnReducer,
  // Add other slice reducers here if needed
};

const store = configureStore({
  reducer: rootReducer,
  // Add middleware or other configurations if needed
});

export default store;
