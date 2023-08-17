import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    }
  },
})

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;