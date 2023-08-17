import React from 'react';
import SignupForm from "./SignupForm.js";
import "../css/signup.css";

const Signup = (props) => {
  return (
    <div className="signup">
      <h1 className="title">Signup</h1>
      <SignupForm />
    </div>
  )
}

export default Signup;