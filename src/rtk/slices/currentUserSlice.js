import { createSlice } from '@reduxjs/toolkit';

// FW-JS
function deepStateClone(state) {
  return JSON.parse(JSON.stringify(state));
}

function configStorage(key, payload) {
  let mixObj = [payload];
  const getItem = localStorage.getItem(key);
  const prevStored = JSON.parse(getItem);

  prevStored.map((obj) => {
    mixObj.push(obj);
  });

  localStorage.setItem("users", JSON.stringify(mixObj));
}

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
        {title: "school", icon: ""},
        {title: "work", icon: ""},
        {title: "life", icon: ""},
        {title: "home", icon: ""},
        {title: "plan", icon: ""}
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
    },
    handleTaskChange: (state, action) => {
      const cloneState = deepStateClone(state);
      const index = cloneState[0].data.tasks.findIndex(task => task.title === action.payload.title);

      cloneState[0].data.tasks[index].isDone = !cloneState[0].data.tasks[index].isDone;

      let getCurrentUser;

      if (localStorage.currentUser) {

        localStorage.removeItem("currentUser");
        localStorage.setItem("currentUser", JSON.stringify(cloneState[0]));

        getCurrentUser = localStorage.getItem("currentUser");

      } else if (sessionStorage.currentUser) {

        sessionStorage.removeItem("currentUser");
        sessionStorage.setItem("currentUser", JSON.stringify(cloneState[0]));

        getCurrentUser = sessionStorage.getItem("currentUser");

      }

      const getUsers = localStorage.getItem("users");

      const parseUsers = JSON.parse(getUsers);
      const parseCurrentUser = JSON.parse(getCurrentUser);

      const userIndex = parseUsers.findIndex(user => user.email === parseCurrentUser.email);

      parseUsers.splice(userIndex, 1);
      parseUsers.push(cloneState[0]);

      localStorage.setItem("users", JSON.stringify(parseUsers));

      return cloneState;
    },
    addNewTask: (state, action) => {
      const cloneState = deepStateClone(state);
      
      cloneState[0].data.tasks.push(action.payload);

      let getCurrentUser;

      if (localStorage.currentUser) {

        localStorage.removeItem("currentUser");
        localStorage.setItem("currentUser", JSON.stringify(cloneState[0]));

        getCurrentUser = localStorage.getItem("currentUser");

      } else if (sessionStorage.currentUser) {

        sessionStorage.removeItem("currentUser");
        sessionStorage.setItem("currentUser", JSON.stringify(cloneState[0]));

        getCurrentUser = sessionStorage.getItem("currentUser");

      }

      const getUsers = localStorage.getItem("users");

      const parseUsers = JSON.parse(getUsers);
      const parseCurrentUser = JSON.parse(getCurrentUser);

      const userIndex = parseUsers.findIndex(user => user.email === parseCurrentUser.email);

      parseUsers.splice(userIndex, 1);
      parseUsers.push(cloneState[0]);

      localStorage.setItem("users", JSON.stringify(parseUsers));

    },
    addNewCategory: (state, action) => {
      const cloneState = deepStateClone(state);
      
      cloneState[0].data.categories.push(action.payload);

      let getCurrentUser;

      if (localStorage.currentUser) {

        localStorage.removeItem("currentUser");
        localStorage.setItem("currentUser", JSON.stringify(cloneState[0]));

        getCurrentUser = localStorage.getItem("currentUser");

      } else if (sessionStorage.currentUser) {

        sessionStorage.removeItem("currentUser");
        sessionStorage.setItem("currentUser", JSON.stringify(cloneState[0]));

        getCurrentUser = sessionStorage.getItem("currentUser");

      }

      const getUsers = localStorage.getItem("users");

      const parseUsers = JSON.parse(getUsers);
      const parseCurrentUser = JSON.parse(getCurrentUser);

      const userIndex = parseUsers.findIndex(user => user.email === parseCurrentUser.email);

      parseUsers.splice(userIndex, 1);
      parseUsers.push(cloneState[0]);

      localStorage.setItem("users", JSON.stringify(parseUsers));
      
    }
  },
})

export const { addCurrentUser, handleTaskChange, addNewTask, addNewCategory } = currentUserSlice.actions;

export default currentUserSlice.reducer;