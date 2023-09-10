import { useEffect } from 'react';
import Task from "./Task.js";

const CardTasks = ({ user, category }) => {

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

  const tasks = objFilter.allWith(user.data.tasks, category.title);

  function getPercent() {
    const checkedTasks = tasks.filter((task) => {
      if (task.isDone) {
        return true;
      }
    }).length;

    if (checkedTasks !== 0) {
    	return checkedTasks * 100 / tasks.length;
    }

    return 0;
  }

  useEffect(() => {
    // console.log(user);
    // console.log(category);
  }, [])

  return (
		<>
			<div className="category-tasks">
				{
					tasks.map((task, index) => (<Task key={index} className="card-task" values={task} index={index} deleteVisibility={false} />))
				}
			</div>
			<div className="percent-bar">
				<span className="percentage">{getPercent().toFixed()}%</span>
				<span className="bar">
					<span className="prog" style={{width: `${getPercent()}%`}}></span>  
				</span>
			</div>
		</>
  )
}

export default CardTasks;