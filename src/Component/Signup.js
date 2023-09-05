import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/signup.css";

import Container from "./Container.js";
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
      <Container>
        <h1 className="title">Signup</h1>
        <SignupForm />
      </Container>
    </div>
  )
}

export default Signup;