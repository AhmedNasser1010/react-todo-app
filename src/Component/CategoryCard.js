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

  function getCountOfTasks() {
    let obj = objFilter.allWith(currentUser.data.tasks, props.categoryTitle)

    return obj.filter((task) => {
      if (!task.isDone) {
        return true;
      }
    })
  }

  return (
    <div onClick={() => handleClick(props.categoryTitle)} className="category-card">
    	<img className="image" src={props.img} alt="category icon" />
    	<h3 className="title">{props.categoryTitle}</h3>
    	<span className="tasks-counter">{getCountOfTasks().length} Tasks</span>
    </div>
  )
}

export default CategoryCard;