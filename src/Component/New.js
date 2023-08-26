import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCurrentUser } from "../rtk/slices/currentUserSlice.js";

import "../css/newTask.css";

import TaskForm from "./TaskForm.js";

const New = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addCurrentUser())
  }, [])

  return (
    <div className="new-task">
      <Link to="/"><i className="fa-solid fa-chevron-left back-btn"></i></Link>
      <h1 className="title">Add new task</h1>
      <TaskForm />
    </div>
  )
}

export default New;