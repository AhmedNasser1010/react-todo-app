import { Link } from 'react-router-dom';
import CategoryCard from "./CategoryCard.js";
import Slider from "react-slick";
import "../css/swiper.css";

function HomeThemeSingle({ user }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings} >
        {
          user.data.categories.map((cat, index) => (
            <div key={index}>
              <CategoryCard category={cat} bg={cat.HEX} />
            </div>
          ))
        }
      </Slider>
      {
        user.data.categories.length === 0 && <span className="zero-tasks">There is No Categories Here<br /><Link to="/new/add-category">Add New!</Link></span>
      }
      <Link to="/new" className={`add-new-task ${user.data.categories.length % 2 === 0 ? "duble" : ""}`}><i className="fa-solid fa-plus"></i></Link>
    </>
  )
}

export default HomeThemeSingle;