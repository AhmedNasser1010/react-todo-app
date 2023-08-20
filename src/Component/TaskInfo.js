import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const TaskInfo = (props) => {
	const { category } = useParams();
	const currentUser = useSelector((state) => state.currentUser[0]);
	const [currentCategory, setCurrentCategory] = useState([]);

	// FW-JS
  const objFilter = {
    allWith: function (objInArr, key, value) {
      let result = [];
      result = objInArr.filter((obj) => {
        if (obj[key] === value) {return true}
      });
      return result;
    },
    allWithout: function (objInArr, key, value) {
      let result = [];
       result = objInArr.filter((obj) => {
          if (obj[key] !== value) {return true}
        });
        return result;
      },
  };

  useEffect(() => {
  	setCurrentCategory(objFilter.allWith(currentUser.data.categories, "title", category));
  }, [currentUser]);

  function getCountOfTasks() {
    let obj = objFilter.allWith(currentUser.data.tasks, "category", category);

    return obj.filter((task) => {
      if (!task.isDone) {
        return true;
      }
    })
  }

  return (
    <div className="task-info">
    	<img src={currentCategory[0] && currentCategory[0].icon} alt="category icon" />
    	<div>
    		<h1>{currentCategory[0] && currentCategory[0].title}</h1>
    		<span>{getCountOfTasks().length} Tasks</span>
    	</div>
    </div>
  )
}

export default TaskInfo;