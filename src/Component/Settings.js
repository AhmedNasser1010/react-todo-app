import React from 'react';
import { useDispatch } from "react-redux";
import { logout, remCurrent, remAll } from "../rtk/slices/currentUserSlice.js";
import { useNavigate, Link } from "react-router-dom";

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
    navigate("/login");
  }

  return (
    <div className="settings">
      <Link to="/"><i className="fa-solid fa-chevron-left"></i></Link>
      <div className="btns">
        <span className="btn logout" onClick={handleLogout}>Logout</span>
        <span className="btn rem-current" onClick={handleRemCurrent}>Remove Current Account</span>
        <span className="btn rem-all" onClick={handleRemAll}>Remove All Users Data</span>
      </div>
    </div>
  )
}

export default Settings;