import { Link } from 'react-router-dom';
import CategoryCard from "./CategoryCard.js";

const HomeThemeMulti = ({ user }) => {
	return (
		<div className="theme-multi">
      {
        user.data.categories.map((cat, index) => (
            <CategoryCard key={index} category={cat} />
        ))
      }
      {
        user.data.categories.length === 0 && <span className="zero-tasks">There is No Categories Here<br /><Link to="/new/add-category">Add New!</Link></span>
      }
      <Link to="/new" className={`add-new-task ${user.data.categories.length % 2 === 0 ? "duble" : ""}`}><i className="fa-solid fa-plus"></i></Link>
    </div>
	)
}

export default HomeThemeMulti;