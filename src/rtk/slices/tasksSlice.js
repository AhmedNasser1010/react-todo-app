import { createSlice } from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: 5,
  reducers: {
    increment: (state, action) => {
      state += action.payload;
    }
  }
})

export const { increment } = tasksSlice.actions;

export default tasksSlice.reducer;