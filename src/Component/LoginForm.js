import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

const LoginForm = (props) => {
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

    if (e.target.value === "on") {
      value = e.target.checked;

      if (value === true) {
        e.target.parentElement.classList.add("checked");
      } else {
        e.target.parentElement.classList.remove("checked");
      }
    } else {
      value = e.target.value;
    };

    setValues({...values, [name]: value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    let isValid = true;
    const emailInput = document.querySelector("input.email").parentElement;
    const passwordInput = document.querySelector("input.password").parentElement;
    let localStorageUsers;

    if (localStorage.users) {
      localStorageUsers = JSON.parse(localStorage.users);
    } else {isValid = false; emailInput.classList.add("notValid"); return}

    localStorageUsers.map((user) => {

      if (values.email === user.email) {
        isValid = true;
        if (values.password !== user.password) {
          passwordInput.classList.add("notValid");
          isValid = false;
        } else {
          isValid = true;
          const currentUser = user;
          if (values.rememberMe) {
            localStorage.setItem("currentUser", JSON.stringify(currentUser));
          } else {
            sessionStorage.setItem("currentUser", JSON.stringify(currentUser));
          }
          if(isValid) {
            navigate("/");
          }
        }
      } else {isValid = false; emailInput.classList.add("notValid");}
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        <input placeholder="Email" className="email" id="email" value={values.email} type="email" name="email" onChange={handleChange} />
      </label>
      <label htmlFor="password">
        <input placeholder="Password" className="password" id="password" value={values.password} type="password" name="password" onChange={handleChange} />
      </label>
      <label htmlFor="remember" className="custom-checkbox-container">
        <input name="rememberMe" id="remember" className="checkbox" onChange={handleChange} type="checkbox" />
        <span className="custom-checkbox"></span>
        Remember me
      </label>
      <input className="submit" type="submit" value="LOGIN" />
      <span className="or-signup">You dont have account <Link to="/signup">Signup</Link></span>
      <div className="or">
        <span className="title">Or Login With</span>
        <div>
          <a href="#" className="icon google"><i className="fa-brands fa-google"></i></a>
          <a href="#" className="icon facebook"><i className="fa-brands fa-facebook-f"></i></a>
        </div>
      </div>
    </form>
  )
}

export default LoginForm;