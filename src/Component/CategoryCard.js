import { useSelector } from 'react-redux';
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import CardTasks from "./CardTasks.js";

import WaveEffect from "./WaveEffect.js";

// for my own framework
function hexToRgb(hex, result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)) {
  return result ? result.slice(1).map(i => parseInt(i, 16)).join(', ') : null;
}

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

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

  function getPercent() {
    if (currentUser) {
      const checkedTasks = objFilter.allWith(currentUser.data.tasks, category.title).filter((task) => {
        if (task.isDone) {
          return true;
        }
      }).length;
      const allTasks = objFilter.allWith(currentUser.data.tasks, category.title).length;

      if (allTasks === 0 || checkedTasks === 0) {
        return 0;
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

  function handleTaskCounterColor() {
    if (getPercent() > 13) {
      return "white";
    }
    return "gray";
  }

  function handleTitlColor() {
    if (getPercent() > 23) {
      return "white";
    }
    return "#292929";
  }

  return (
    <div className="category-card" style={{background: `linear-gradient(150deg, rgba(${hexToRgb(bg)},0.8) 0%, rgba(${hexToRgb(bg)},1) 40%)`, boxShadow: `rgba(${hexToRgb(category.HEX)}, 36%) 0px 60px 40px -35px`}}>
      <i className={`${category.icon.style} ${category.icon.name} main-icon`} style={{color: category.HEX}}></i>
      <i className={`${category.icon.style} ${category.icon.name} back-icon`} style={{visibility: "hidden"}}></i>
    	<div className="text" onClick={() => handleClick(category.title)}>
        <h3 className="title" style={{color: handleTitlColor()}}>{category.title}</h3>
        <span className="tasks-counter" style={{color: handleTaskCounterColor()}}>{getCountOfTasks().length} Tasks</span>
      </div>
      <span className="progress" style={{backgroundColor: category.HEX, height: `${getPercent()}%`}}></span>
      <WaveEffect rgb={hexToRgb(category.HEX)} numOfWaves={1} wavesWidth="100%" wavesHeight="20px" height={`calc(${getPercent()}% + 20px)`} bgColor={category.HEX} />
      {
        isSingle() && <CardTasks user={currentUser} percent={getPercent} category={category} />
      }
    </div>
  )
}

export default CategoryCard;