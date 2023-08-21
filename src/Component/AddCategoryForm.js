import { useState } from 'react';
import { addNewCategory } from "../rtk/slices/currentUserSlice.js";
import { useDispatch } from "react-redux";

import IconsList from "./IconsList.js";

const AddCategoryForm = (props) => {
	// remproray icon link ***
	const [newCategory, setNewCategory] = useState({title: "", icon: "https://placehold.co/50x50"});
	const dispatch = useDispatch();

	function handleChange(e) {
		setNewCategory({...newCategory, title: e.target.value});
	}

	function handleSubmit(e) {
    e.preventDefault();
    let isValid = true;
    if (newCategory.title === "" || newCategory.category === "") {
      isValid = false;
    }

    if (isValid) {
      dispatch(addNewCategory(newCategory));
      setNewCategory({...newCategory, title: ""});
    }
  }

  return (
    <form onSubmit={handleSubmit}>
    	<input type="text" placeholder="Category Title" value={newCategory.title} onChange={handleChange} />
    	<IconsList />
    	<input type="submit" value="+ Add Category" />
    </form>
  )
}

export default AddCategoryForm;