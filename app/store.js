import pkg from '@reduxjs/toolkit';
const { configureStore } = pkg;
import cakeReducer from '../features/cake/cakeSlice.js';
import icecreamReducer from '../features/icecream/icecreamSlice.js';

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
  },
});

export default store;
