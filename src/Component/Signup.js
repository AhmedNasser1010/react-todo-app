import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignupForm from "./SignupForm.js";
import "../css/signup.css";

const Signup = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.currentUser || sessionStorage.currentUser) {
      navigate("/");
    }
  }, [])

  return (
    <div className="signup">
      <h1 className="title">Signup</h1>
      <SignupForm />
    </div>
  )
}

export default Signup;