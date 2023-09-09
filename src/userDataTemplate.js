const userDataTemplate = {
  fName: "",
  lName: "",
  email: "",
  password: "",
  img: "",
  age: "",
  sex: "",
  data: {
    categories: [
      {title: "school", icon: {style: "fa-solid", name: "fa-graduation-cap"}, HEX: "#214fff"},
      {title: "work", icon: {style: "fa-solid", name: "fa-briefcase"}, HEX: "#38e78d"},
      {title: "life", icon: {style: "fa-solid", name: "fa-heart-pulse"}, HEX: "#fe2e87"},
      {title: "home", icon: {style: "fa-solid", name: "fa-house"}, HEX: "#f9e40a"},
      {title: "plan", icon: {style: "fa-regular", name: "fa-clipboard"}, HEX: "#ed51ff"}
    ],
    tasks: []
  }
};

export default userDataTemplate;