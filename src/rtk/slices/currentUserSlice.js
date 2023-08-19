import { createSlice } from '@reduxjs/toolkit';

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState: [{
    fName: "",
    lName: "",
    email: "",
    password: "",
    url: "",
    age: "",
    sex: "",
    data: {
      categories: [
        {title: "school", icon: "X"},
        {title: "work", icon: "X"},
        {title: "life", icon: "X"},
        {title: "home", icon: "X"},
        {title: "plan", icon: "X"}
      ],
      tasks: []
    }
  }],
  reducers: {
    addCurrentUser: (state, action) => {
      if (localStorage.currentUser) {
        state.pop();
        state.push(JSON.parse(localStorage.currentUser));
      } else if (sessionStorage.currentUser) {
        state.pop();
        state.push(JSON.parse(sessionStorage.currentUser));
      }
    }
  },
})

export const { addCurrentUser } = currentUserSlice.actions;

export default currentUserSlice.reducer;