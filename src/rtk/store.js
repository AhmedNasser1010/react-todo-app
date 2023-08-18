import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './slices/usersSlice.js';

export const store = configureStore({
  reducer: {
    users: usersSlice
  }
});