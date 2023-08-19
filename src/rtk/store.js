import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './slices/usersSlice.js';
import currentUserSlice from './slices/currentUserSlice.js';

export const store = configureStore({
  reducer: {
    users: usersSlice,
    currentUser: currentUserSlice
  }
});