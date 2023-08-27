import { useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const CategoryCard = ({ category, bg }) => {
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
      let obj = objFilter.allWith(currentUser.data.tasks, category.title);

      return obj.filter((task) => {
        if (!task.isDone) {
          return true;
        }
      })
    }
    return [];
  }

  function getPearcent() {
    const checkedTasks = objFilter.allWith(currentUser.data.tasks, category.title).filter((task) => {
      if (task.isDone) {
        return true;
      }
    }).length;
    const allTasks = objFilter.allWith(currentUser.data.tasks, category.title).length;

    if (allTasks === 0 || checkedTasks === 0) {
      return 15;
    } else {
      return checkedTasks * 100 / allTasks;
    }
  }

  return (
    <div onClick={() => handleClick(category.title)} className="category-card" style={{backgroundColor: bg}}>
      <i className={`${category.icon.style} ${category.icon.name}`} style={{color: category.HEX}}></i>
    	<div className="text">
        <h3 className="title">{category.title}</h3>
        <span className="tasks-counter">{getCountOfTasks().length} Tasks</span>
      </div>
      <span className="progress" style={{backgroundColor: category.HEX, height: `${getPearcent()}%`}}></span>
    </div>
  )
}

export default CategoryCard;