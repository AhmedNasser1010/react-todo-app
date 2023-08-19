import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Awesome from "./Awesome.js";
import { addUser } from "../rtk/slices/usersSlice.js";
import { useNavigate, Link } from 'react-router-dom';

const SignupForm = (props) => {
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();
  
  const dispatch = useDispatch();
  const [localUser, setLocalUser] = useState({fName: "", lName: "", email: "", password: "", url: "", age: "", sex: "", data: {categories: ["school", "work", "life", "home", "plan"], tasks: {}}});

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

    users.map((user) => {
      if(user.email === localUser.email) {
        isValid = false;
      }
    })

    if(localStorage.users) {
      const localUsers = JSON.parse(localStorage.users);
      localUsers.map((user) => {
        if(user.email === localUser.email) {
          isValid = false;
        };
      });
    };

    if(isValid) {
      dispatch(addUser(localUser));
      navigate("/login");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
    	<label htmlFor="fName">
    		First Name
    		<input className="fName" id="fName" value={localUser.fName} type="text" name="fName" onChange={handleChange} />
    	</label>
    	<label htmlFor="lName">
    		Last Name
    		<input className="lName" id="lName" value={localUser.lName} type="text" name="lName" onChange={handleChange} />
    	</label>
    	<label htmlFor="email">
    		Email
    		<input className="email" id="email" value={localUser.email} type="email" name="email" onChange={handleChange} />
    	</label>
    	<label htmlFor="password">
    		Password
    		<input className="password" id="password" value={localUser.password} type="password" name="password" onChange={handleChange} />
    	</label>
    	<label htmlFor="url">
    		Avatar URL
    		<input className="avatar-url" id="url" value={localUser.url} type="text" name="url" onChange={handleChange} />
    	</label>
    	<label className="ageSex">
    		Age & Sex
    		<div>
    			<input className="age" name="age" value={localUser.age} type="text" onChange={handleChange} />
    			<span className="sex male" data-value="male" onClick={handleSex}>Male</span>
    			<span className="sex female" data-value="female" onClick={handleSex}>Female</span>
    		</div>
    	</label>
    	<input className="submit" type="submit" value="Signup" />
      <span className="or-signup">You already have account <Link to="/login">Login</Link></span>
    	<div className="or">
    		<span className="title">Or Signup With</span>
    		<a href="#" className="google">G</a>
    		<a href="#" className="facebook">F</a>
    	</div>
    </form>
  )
}

export default SignupForm;