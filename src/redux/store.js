import { configureStore } from '@reduxjs/toolkit';
import greattingReducer from './greeting/greettingSlice';

const store = configureStore({
  reducer: {
    greeting: greattingReducer,
  },
});

export default store;
