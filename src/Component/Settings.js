import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { logout, remCurrent, remAll } from "../rtk/slices/currentUserSlice.js";
import { remUsersData } from "../rtk/slices/usersSlice.js";
import { useNavigate, Link } from "react-router-dom";

import "../css//settings.css";

const Settings = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(logout());
    navigate("/login");
  }

  function handleRemCurrent() {
    dispatch(remCurrent());
    navigate("/login");
  }

  function handleRemAll() {
    dispatch(remAll());
    dispatch(remUsersData());
    navigate("/login");
  }

  return (
    <div className="settings">
      <div className="container">
        <Link to="/"><i className="back-btn fa-solid fa-chevron-left"></i></Link>
        <div className="btns">
          <span className="btn logout" onClick={handleLogout}>Logout</span>
          <span className="btn rem-current" onClick={handleRemCurrent}>Remove Current Account</span>
          <span className="btn rem-all" onClick={handleRemAll}>Remove All Users Data</span>
        </div>
      </div>
    </div>
  )
}

export default Settings;