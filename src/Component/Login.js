import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from "./LoginForm.js";

import "../css/login.css";

const Login = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.currentUser || sessionStorage.currentUser) {
      navigate("/");
    }
  }, [])

  return (
    <div className="login">
      <div className="container">
        <h1 className="title">Login</h1>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login;