import { useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
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

  function getCountOfTasks() {
    if (currentUser) {
      let obj = objFilter.allWith(currentUser.data.tasks, category.title)

      return obj.filter((task) => {
        if (!task.isDone) {
          return true;
        }
      })
    }
    return [];
  }

  return (
    <div style={{backgroundColor: category.HEX}} onClick={() => handleClick(category.title)} className="category-card">
      {/* temporary style */}
      <i className={`${category.icon.style} ${category.icon.name}`}></i>
    	<h3 className="title">{category.title}</h3>
    	<span className="tasks-counter">{getCountOfTasks().length} Tasks</span>
    </div>
  )
}

export default CategoryCard;