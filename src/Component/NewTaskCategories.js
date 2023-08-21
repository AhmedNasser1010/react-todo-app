import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NewTaskCategories = (props) => {
	const currentUser = useSelector((state) => state.currentUser);

	function handleCategoryChange(cat) {
		props.category(cat);
	}

  return (
    <div className="categories">
    	{
    		currentUser[0].data.categories.map((category) => (
    			// temprary style
    			<span style={{margin: "0 5px", cursor: "pointer"}} key={category.title} className={`category ${category.title}`} data-hex onClick={() => handleCategoryChange(category.title)}>{category.title}</span>
    		))
    	}
    	<Link to="/new/add-category" className="category add-category">+</Link>
    </div>
  )
}

// data-hex={category.hex}

export default NewTaskCategories;