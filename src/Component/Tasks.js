import { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addCurrentUser } from "../rtk/slices/currentUserSlice.js";

import TaskInfo from "./TaskInfo.js";
import Task from "./Task.js";
import TaskProgressBar from "./TaskProgressBar.js";

const Tasks = (props) => {
	const { category } = useParams();
  const currentUser = useSelector((state) => state.currentUser[0]);
  const dispatch = useDispatch();
  const [tasks, setTasks] = useState([]);

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
    dispatch(addCurrentUser());
  }, [])

  useEffect(() => {
    setTasks(objFilter.allWith(currentUser.data.tasks, "category", category));
  }, [currentUser])

  return (
    <div className="tasks">
      <Link to="/"><i className="fa-solid fa-chevron-left"></i></Link>
      <TaskInfo />
      <div className="tasks">
        {
          tasks.map((task, index) => (<Task key={index} values={task} />))
        }
        {
          tasks.length === 0 && <span>There is No Tasks Here<br /><Link to="/new">Add New!</Link></span>
        }
      </div>
      <TaskProgressBar />
    </div>
  )
}

export default Tasks;