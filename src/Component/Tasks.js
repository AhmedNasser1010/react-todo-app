import { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addCurrentUser } from "../rtk/slices/currentUserSlice.js";
import styled from 'styled-components';

import TaskInfo from "./TaskInfo.js";
import Task from "./Task.js";
import TaskProgressBar from "./TaskProgressBar.js";
import Container from "./Container.js";

import "../css/tasks.css";

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

  const CheckedStyled = styled.div`
    &.task-container.checked:last-of-type {
      margin-bottom: 100px;
    }
  `;

  return (
    <div className="tasks">
      <Container>
        <Link to="/"><i className="fa-solid fa-chevron-left back-btn"></i></Link>
        <TaskInfo />
        <CheckedStyled className="tasks">
          {
            tasks.map((task, index) => (<Task key={index} className="task" values={task} index={index} deleteVisibility={true} />))
          }
          {
            tasks.length === 0 && <span className="empty">There is No Tasks Here<br /><Link to="/new">Add New!</Link></span>
          }
        </CheckedStyled>
        <TaskProgressBar />
      </Container>
    </div>
  )
}

export default Tasks;