import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from "./LoginForm.js";

import "../css/login.css";

import Container from "./Container.js";

const Login = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.currentUser || sessionStorage.currentUser) {
      navigate("/");
    }
  }, [])

  return (
    <div className="login">
      <Container>
        <h1 className="title">Login</h1>
        <LoginForm />
      </Container>
    </div>
  )
}

export default Login;