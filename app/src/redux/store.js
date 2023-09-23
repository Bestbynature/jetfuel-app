import { configureStore } from '@reduxjs/toolkit';
import jetsReducer from '../redux/jetfuel/jetfuelSlice'

const store = configureStore({
  reducer: {
    jets: jetsReducer,
  },
});

export default store;
