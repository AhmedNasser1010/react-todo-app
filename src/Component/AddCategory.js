import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { addCurrentUser } from "../rtk/slices/currentUserSlice.js";
import { Link } from "react-router-dom";

import "../css/addCategory.css";

import AddCategoryForm from "./AddCategoryForm.js";

const AddCategory = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addCurrentUser())
  }, [])

  return (
    <div className="add-category">
      <div className="container">
        <Link to="/new"><i className="fa-solid fa-chevron-left back-btn"></i></Link>
        <h1 className="title">Add new category</h1>
        <AddCategoryForm />
      </div>
    </div>
  )
}

export default AddCategory;