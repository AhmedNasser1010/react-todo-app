import { createSlice } from '@reduxjs/toolkit';
import userDataTemplate from "../../userDataTemplate.js";

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
  initialState: [userDataTemplate],
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
    logout: (state, action) => {
      if (localStorage.currentUser) {
        localStorage.removeItem("currentUser");
      } else if (sessionStorage.currentUser) {
        sessionStorage.removeItem("currentUser");
      }
      state.pop();
    },
    handleTaskChange: (state, action) => {
      const cloneState = deepStateClone(state);
      const index = cloneState[0].data.tasks.findIndex(task => task.id === action.payload.id);

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
      // deep clone slice state
      const cloneState = deepStateClone(state);

      // Update the cloned state with the new task
      cloneState[0].data.tasks.push(action.payload);

      let getCurrentUser;

      // replace currentUser storage with the new version
      // then get currentUser in new variable (getCurrentUser) after the update
      if (localStorage.currentUser) {

        localStorage.removeItem("currentUser");
        localStorage.setItem("currentUser", JSON.stringify(cloneState[0]));

        getCurrentUser = localStorage.getItem("currentUser");

      } else if (sessionStorage.currentUser) {

        sessionStorage.removeItem("currentUser");
        sessionStorage.setItem("currentUser", JSON.stringify(cloneState[0]));

        getCurrentUser = sessionStorage.getItem("currentUser");

      }

      // get users data from localStorage
      // parse() given users and currentUser
      // get user index from users
      const getUsers = localStorage.getItem("users");

      const parseUsers = JSON.parse(getUsers);
      const parseCurrentUser = JSON.parse(getCurrentUser);

      const userIndex = parseUsers.findIndex(user => user.email === parseCurrentUser.email);

      // remove current user with index in parseUsers
      // push the new edition of the user with the new task in parseUsers
      parseUsers.splice(userIndex, 1);
      parseUsers.push(cloneState[0]);

      // set parseUsers as a users in localStorage
      localStorage.setItem("users", JSON.stringify(parseUsers));

      return cloneState;

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

      return cloneState;
      
    },
    remCurrent: (state, action) => {

      let getCurrentUser;
      
      if (localStorage.currentUser) {

        getCurrentUser = localStorage.getItem("currentUser");
        localStorage.removeItem("currentUser");

      } else if (sessionStorage.currentUser) {

        getCurrentUser = sessionStorage.getItem("currentUser");
        sessionStorage.removeItem("currentUser");

      }

      state.pop();

      const getUsers = localStorage.getItem("users");

      const parseUsers = JSON.parse(getUsers);
      const parseCurrentUser = JSON.parse(getCurrentUser);

      const userIndex = parseUsers.findIndex(user => user.email === parseCurrentUser.email);

      parseUsers.splice(userIndex, 1);

      localStorage.setItem("users", JSON.stringify(parseUsers));

    },
    remAll: (state, action) => {

      if (localStorage.currentUser) {

        localStorage.removeItem("currentUser");

      } else if (sessionStorage.currentUser) {

        sessionStorage.removeItem("currentUser");

      }

      localStorage.removeItem("users");

      state.pop();
    },
    // remove task btn action
    // ****** best action orgnize ******
    remTask: (state, action) => {
      // deep clone state
      const cloneState = deepStateClone(state)[0];
  
      // get task index
      const taskIndex = cloneState.data.tasks.findIndex(task => task.title === action.payload.title);
      
      // remove current task
      cloneState.data.tasks.splice(taskIndex, 1);

      // update tasks from state slice
      state.pop();
      state.push(cloneState);
      
      // update tasks from currentUser storage
      if (localStorage.currentUser) {

        localStorage.removeItem("currentUser");
        localStorage.setItem("currentUser", JSON.stringify(cloneState));

      } else if (sessionStorage.currentUser) {

        sessionStorage.removeItem("currentUser");
        sessionStorage.setItem("currentUser", JSON.stringify(cloneState));

      }

      // update tasks from users storage
      const users = JSON.parse(localStorage.getItem("users"));
      const userIndex = users.findIndex(user => user.email === cloneState.email);
      
      users.splice(userIndex, 1);
      users.push(cloneState);
      localStorage.setItem("users", JSON.stringify(users));
    },
    remCategory: (state, action) => {
      // deep clone state
      const cloneState = deepStateClone(state)[0];
  
      // get task index
      const categoryIndex = cloneState.data.categories.findIndex(category => category.title === action.payload.title);
      
      // remove current task
      cloneState.data.categories.splice(categoryIndex, 1);

      // update tasks from state slice
      state.pop();
      state.push(cloneState);
      
      // update tasks from currentUser storage
      if (localStorage.currentUser) {

        localStorage.removeItem("currentUser");
        localStorage.setItem("currentUser", JSON.stringify(cloneState));

      } else if (sessionStorage.currentUser) {

        sessionStorage.removeItem("currentUser");
        sessionStorage.setItem("currentUser", JSON.stringify(cloneState));

      }

      // update tasks from users storage
      const users = JSON.parse(localStorage.getItem("users"));
      const userIndex = users.findIndex(user => user.email === cloneState.email);
      
      users.splice(userIndex, 1);
      users.push(cloneState);
      localStorage.setItem("users", JSON.stringify(users));
    }
  },
})

export const { addCurrentUser,
  handleTaskChange,
  addNewTask,
  addNewCategory,
  logout,
  remCurrent,
  remAll,
  remTask,
  remCategory
} = currentUserSlice.actions;

export default currentUserSlice.reducer;