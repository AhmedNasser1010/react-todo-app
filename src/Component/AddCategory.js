import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { addCurrentUser } from "../rtk/slices/currentUserSlice.js";
import { Link } from "react-router-dom";

import AddCategoryForm from "./AddCategoryForm.js";

const AddCategory = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addCurrentUser())
  }, [])

  return (
    <div className="add-category">
      <Link to="/">{`<Back`}</Link>
      <h1 className="title">Add New Category</h1>
      <AddCategoryForm />
    </div>
  )
}

export default AddCategory;