import { useState, useEffect } from 'react';
import { addNewCategory } from "../rtk/slices/currentUserSlice.js";
import { useDispatch } from "react-redux";

import IconsList from "./IconsList.js";

const AddCategoryForm = (props) => {
	// temproray icon link ***
	const [newCategory, setNewCategory] = useState({title: "", icon: {style: "", name: ""}, HEX: "#607d8b"});
	const dispatch = useDispatch();

	function handleChange(e) {
		setNewCategory({...newCategory, title: e.target.value});
	}

  function handleLiftingIconUp(icon) {
    setNewCategory({...newCategory, icon: icon});
  }

  function handleColorChange(e) {
    setNewCategory({...newCategory, HEX: e.target.value});
  }

	function handleSubmit(e) {
    e.preventDefault();
    let isValid = true;
    if (newCategory.title === "" || newCategory.icon.name === "") {
      isValid = false;
    }

    if (isValid) {
      dispatch(addNewCategory(newCategory));
      setNewCategory({...newCategory, title: "", icon: {style: "", name: ""}});
    }
  }

  return (
    <form onSubmit={handleSubmit}>
    	<input type="text" placeholder="Category Title" value={newCategory.title} onChange={handleChange} />
      <input type="color" onChange={handleColorChange} value={newCategory.HEX} />
    	<IconsList icon={handleLiftingIconUp} />
    	<input type="submit" value="+ Add Category" />
    </form>
  )
}

export default AddCategoryForm;