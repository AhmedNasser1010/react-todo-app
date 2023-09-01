import { useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import CardTasks from "./CardTasks.js";

const CategoryCard = ({ category, bg }) => {
	const currentUser = useSelector((state) => state.currentUser[0]);
	const navigate = useNavigate();

  useEffect(() => {
    console.log(currentUser);
  }, [currentUser])

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

  function getPercent() {
    if (currentUser) {
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
  }

  function isSingle() {
    const ele = document.querySelector(".categories");
    if (ele) {
      if (ele.classList.contains("single")) {
        return true;
      } else {
        return false;
      }
    }
  }

  return (
    <div className="category-card" style={{backgroundColor: bg}}>
      <i className={`${category.icon.style} ${category.icon.name} main-icon`} style={{color: category.HEX}}></i>
      <i className={`${category.icon.style} ${category.icon.name} back-icon`} style={{visibility: "hidden"}}></i>
    	<div className="text" onClick={() => handleClick(category.title)}>
        <h3 className="title">{category.title}</h3>
        <span className="tasks-counter">{getCountOfTasks().length} Tasks</span>
      </div>
      <span className="progress" style={{backgroundColor: category.HEX, height: `${getPercent()}%`}}></span>
      {
        isSingle() && <CardTasks user={currentUser} percent={getPercent} category={category} />
      }
    </div>
  )
}

export default CategoryCard;