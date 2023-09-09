import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from "../rtk/slices/usersSlice.js";
import { useNavigate, Link } from 'react-router-dom';
import userDataTemplate from "../userDataTemplate.js";

const SignupForm = (props) => {
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();
  
  const dispatch = useDispatch();
  const [localUser, setLocalUser] = useState(userDataTemplate);

  function handleChange(e) {
    let value;
    const name = e.target.name;

    e.target.value === "on" ? value = e.target.checked : value = e.target.value;

    setLocalUser({...localUser, [name]: value});
  }

  function handleSex(e) {
    const ele = e.target;
    const elements = document.querySelectorAll(".sex");
    const value = ele.getAttribute('data-value');

    elements.forEach((ele) => {ele.classList.remove("selected")});

    ele.classList.add("selected");
    setLocalUser({...localUser, sex: value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    let isValid = true;
    let storageUsers;
    if (localStorage.users) {
      storageUsers = JSON.parse(localStorage.users);
    };
    const fNameInput = document.querySelector("input.fName").parentElement;
    const lNameInput = document.querySelector("input.lName").parentElement;
    const emailInput = document.querySelector("input.email").parentElement;
    const passwordInput = document.querySelector("input.password").parentElement;
    const ageInputAndOthers = document.querySelector("input.age").parentElement;

    // fName
    if (localUser.fName !== "") {
      // check if equal the other users
      if (localStorage.users) {
        storageUsers.map((user) => {
          if(localUser.fName === user.fName) {
            isValid = false;
            fNameInput.classList.add("notValid");
          };
        });
      }

      // check if smaller then 3 length or more then 10
      if (localUser.fName.length < 3 || localUser.fName.length >= 15) {
        isValid = false;
        fNameInput.classList.add("notValid");
      };
    } else {isValid = false; fNameInput.classList.add("notValid")};

    // lName
    if (localUser.lName !== "") {
      // check if smaller then 3 length or more then 10
      if (localUser.lName.length < 3 || localUser.lName.length >= 15) {
        isValid = false;
        lNameInput.classList.add("notValid");
      };
    } else {isValid = false; lNameInput.classList.add("notValid");};

    // email
    if (localUser.email !== "") {
      if (localStorage.users) {
        storageUsers.map((user) => {
          if(localUser.email === user.email) {
            isValid = false;
          };
        });
      }

    } else {isValid = false; emailInput.classList.add("notValid");};

    // password
    if (localUser.password !== "") {
      // check if smaller then 3 length or more then 10
      if (localUser.password.length < 4) {
        isValid = false;
        passwordInput.classList.add("notValid");
      };
    } else {isValid = false; passwordInput.classList.add("notValid");};

    if (localUser.age !== "") {
      // check if smaller then 10 length or more then 99
      if (localUser.age < 10 || localUser.age >= 99) {
        isValid = false;
        ageInputAndOthers.classList.add("notValid-other");
      };
    } else {isValid = false; ageInputAndOthers.classList.add("notValid-other")}

    if (localUser.sex === "") {isValid = false; ageInputAndOthers.classList.add("notValid-other")}

    if(isValid) {

      dispatch(addUser(localUser));
      navigate("/login");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
    	<label htmlFor="fName">
    		<input placeholder="First name" className="fName" id="fName" value={localUser.fName} type="text" name="fName" onChange={handleChange} />
    	</label>
    	<label htmlFor="lName">
    		<input placeholder="Last name" className="lName" id="lName" value={localUser.lName} type="text" name="lName" onChange={handleChange} />
    	</label>
    	<label htmlFor="email">
    		<input placeholder="Email" className="email" id="email" value={localUser.email} type="email" name="email" onChange={handleChange} />
    	</label>
    	<label htmlFor="password">
    		<input placeholder="Password" className="password" id="password" value={localUser.password} type="password" name="password" onChange={handleChange} />
    	</label>
    	<label htmlFor="img">
    		<input placeholder="Avatar URL link" className="avatar-img" id="img" value={localUser.img} type="file" accept="image/*" name="img" onChange={handleChange} />
    	</label>
    	<label className="ageSex">
    		<div>
    			<input placeholder="Age" className="age" name="age" value={localUser.age} type="text" onChange={handleChange} />
    			<span className="sex male" data-value="male" onClick={handleSex}>Male</span>
    			<span className="sex female" data-value="female" onClick={handleSex}>Female</span>
    		</div>
    	</label>
    	<input className="submit" type="submit" value="SIGNUP" />
      <span className="or-signup">You already have account <Link to="/login">Login</Link></span>
    	<div className="or">
    		<span className="title">Or Signup With</span>
        <div>
          <a href="#" className="icon google"><i className="fa-brands fa-google"></i></a>
          <a href="#" className="icon facebook"><i className="fa-brands fa-facebook-f"></i></a>
        </div>
    	</div>
    </form>
  )
}

export default SignupForm;