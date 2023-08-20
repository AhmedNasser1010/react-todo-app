import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const TaskProgressBar = (props) => {
	const currentUser = useSelector((state) => state.currentUser[0]);
	const { category } = useParams();

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

	function getPearcent() {
    let obj = objFilter.allWith(currentUser.data.tasks, "category", category);
    let objFiltered = obj.filter((task) => {
      if (task.isDone) {
        return true;
      }
    });

    return (objFiltered.length * 100 / obj.length).toFixed();
  }

  return (
    <div className="task-progress-bar">
    	<span className="count">{getPearcent()}%</span>
    	<span className="bar"></span>
    </div>
  )
}

export default TaskProgressBar;