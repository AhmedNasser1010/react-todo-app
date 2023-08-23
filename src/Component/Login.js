import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

const Login = (props) => {
  const [values, setValues] = useState({email: "", password: "", rememberMe: false});
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.currentUser || sessionStorage.currentUser) {
      navigate("/");
    }
  }, [])

  function handleChange(e) {
    let value;
    const name = e.target.name;

    e.target.value === "on" ? value = e.target.checked : value = e.target.value;

    setValues({...values, [name]: value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    let isValid = true;

    const localStorageUsers = JSON.parse(localStorage.users);

    localStorageUsers.map((user) => {

      if (values.email === user.email) {
        if (!(values.password === user.password)) {
          isValid = false;
        } else {
          const currentUser = user;
          if (values.rememberMe) {
            localStorage.setItem("currentUser", JSON.stringify(currentUser));
          } else {
            sessionStorage.setItem("currentUser", JSON.stringify(currentUser));
          }
        }
      }
    })

    if(isValid) {
      navigate("/");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email
        <input className="email" id="email" value={values.email} type="email" name="email" onChange={handleChange} />
      </label>
      <label htmlFor="password">
        Password
        <input className="password" id="password" value={values.password} type="password" name="password" onChange={handleChange} />
      </label>
      <label htmlFor="remember">
        <input name="rememberMe" id="remember" className="checkbox" onChange={handleChange} type="checkbox" />
        Remember me
      </label>
      <input className="submit" type="submit" value="Signup" />
      <span className="or-signup">You dont have account <Link to="/signup">Signup</Link></span>
      <div className="or">
        <span className="title">Or Login With</span>
        <a href="#" className="google">G</a>
        <a href="#" className="facebook">F</a>
      </div>
    </form>
  )
}

export default Login;