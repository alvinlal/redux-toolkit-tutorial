import redux from '@reduxjs/toolkit';
const { configureStore, getDefaultMiddleware } = redux;
import cakeReducer from '../features/cake/cakeSlice.js';
import icecreamReducer from '../features/icecream/icecreamSlice.js';
import userReducer from '../features/user/userSlice.js';
import reduxLogger from 'redux-logger';
const { createLogger } = reduxLogger;

const logger = createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export default store;
