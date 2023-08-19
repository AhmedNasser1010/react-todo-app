import { useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const CategoryCard = (props) => {
	const currentUser = useSelector((state) => state.currentUser[0]);
	const navigate = useNavigate();

  // FW-JS
  const objFilter = {
    allWith: function (objsArr, category) {
      let result = [];
      result = objsArr.filter((obj) => {
        if (obj.category === category) {return true}
      });
      return result;
    },
    allWithout: function (objsArr, category) {
      let result = [];
       result = objsArr.filter((obj) => {
          if (obj.category !== category) {return true}
        });
        return result;
      },
  };

  function handleClick(title) {
    navigate(`/categories/${title}`);
  }

  return (
    <div onClick={() => handleClick(props.categoryTitle)} className="category-card">
    	<img className="image" src={props.img} alt="category icon" />
    	<h3 className="title">{props.categoryTitle}</h3>
    	<span className="tasks-counter">{objFilter.allWith(currentUser.data.tasks, props.categoryTitle).length} Tasks</span>
    </div>
  )
}

export default CategoryCard;