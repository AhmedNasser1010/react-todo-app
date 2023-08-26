import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { remCategory } from "../rtk/slices/currentUserSlice.js";

const NewTaskCategories = (props) => {
	const currentUser = useSelector((state) => state.currentUser);
	const dispatch = useDispatch();

	function handleCategoryChange(cat) {
		props.category(cat);

		const current = document.querySelector(`.category.${cat}`);
		const categories = Array.from(document.querySelectorAll(`.category`));
		categories.splice(-1, 1);

		categories.forEach(category => category.classList.remove(`selected`));

		current.classList.add(`selected`);
	}

	useEffect(() => {
		const categories = Array.from(document.querySelectorAll(`.category`));
		categories[0].classList.add("selected");
	}, []);

	function handleTaskRem(category) {
		dispatch(remCategory(category));
	}

  return (
    <div className="categories">
    	{
    		currentUser[0].data.categories.map((category, index) => (
    			<span key={index} className={`category ${category.title}`} data-category={category.title} onClick={() => handleCategoryChange(category.title)}>
    				<span className="before" style={{backgroundColor: category.HEX}}></span>
    				{category.title}
    				<i className="fa-regular fa-trash-can task-rem-btn" onClick={() => handleTaskRem(category)}></i>
    			</span>
    		))
    	}
    	<Link to="/new/add-category" className="category add-category"><i className="fa-solid fa-plus"></i></Link>
    </div>
  )
}

// data-hex={category.hex}

export default NewTaskCategories;