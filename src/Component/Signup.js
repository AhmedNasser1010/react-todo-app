import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/signup.css";

import SignupForm from "./SignupForm.js";

const Signup = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.currentUser || sessionStorage.currentUser) {
      navigate("/");
    }
  }, [])

  return (
    <div className="signup">
      <div className="container">
        <h1 className="title">Signup</h1>
        <SignupForm />
      </div>
    </div>
  )
}

export default Signup;