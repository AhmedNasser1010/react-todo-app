import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { remCategory } from "../rtk/slices/currentUserSlice.js";

const NewTaskCategories = (props) => {
	const currentUser = useSelector((state) => state.currentUser);
	const dispatch = useDispatch();

	function handleCategoryChange(cat) {
		props.category(cat);
	}

	function handleTaskRem(category) {
		dispatch(remCategory(category));
	}

  return (
    <div className="categories">
    	{
    		currentUser[0].data.categories.map((category, index) => (
    			// temprary style
    			<span style={{margin: "0 5px", cursor: "pointer"}} key={index} className={`category ${category.title}`} data-hex onClick={() => handleCategoryChange(category.title)}>
    				{category.title}
    				<i className="fa-regular fa-trash-can task-rem-btn" onClick={() => handleTaskRem(category)}></i>
    			</span>
    		))
    	}
    	<Link to="/new/add-category" className="category add-category">+</Link>
    </div>
  )
}

// data-hex={category.hex}

export default NewTaskCategories;