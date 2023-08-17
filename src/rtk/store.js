import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './slices/usersSlice.js';
import tasksSlice from "./slices/tasksSlice.js";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    tasks: tasksSlice
  }
});