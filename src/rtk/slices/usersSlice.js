import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      if(!localStorage.getItem("users")) {
        localStorage.setItem("users", JSON.stringify([]));
      }

      // FW-JS
      function configStorage(key, payload) {
        let mixObj = [payload];
        const getItem = localStorage.getItem(key);
        const prevStored = JSON.parse(getItem);

        prevStored.map((obj) => {
          mixObj.push(obj);
        });

        localStorage.setItem("users", JSON.stringify(mixObj));
      }

      configStorage("users", action.payload);
      state.push(action.payload);
    },
    getUsersFromStorage: (state, action) => {
      return localStorage.users
    }
  },
})

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;