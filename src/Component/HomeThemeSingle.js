import { Link } from 'react-router-dom';
import CategoryCard from "./CategoryCard.js";

const HomeThemeSingle = ({ user }) => {
	return (
		<div className="swiper theme-single">
      <div className="swiper-wrapper">
        {
          user.data.categories.map((cat, index) => (
            <div key={index} className="swiper-slide">
              <CategoryCard category={cat} bg={cat.HEX} />
            </div>
          ))
        }
      </div>

      <div className="swiper-pagination"></div>
      
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>

      <div className="swiper-scrollbar"></div>

      {
        user.data.categories.length === 0 && <span className="zero-tasks">There is No Categories Here<br /><Link to="/new/add-category">Add New!</Link></span>
      }
      <Link to="/new" className={`add-new-task ${user.data.categories.length % 2 === 0 ? "duble" : ""}`}><i className="fa-solid fa-plus"></i></Link>
    </div>
	)
}

export default HomeThemeSingle;