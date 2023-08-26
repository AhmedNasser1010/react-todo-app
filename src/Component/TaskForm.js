import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { addNewTask } from "../rtk/slices/currentUserSlice.js";

import NewTaskCategories from "./NewTaskCategories.js";

const TaskForm = (props) => {
  const [newTask, setNewTask] = useState({title: "", category: "", isDone: false});
  const dispatch = useDispatch();

  function handleChange(e) {
    setNewTask({...newTask, title: e.target.value});
  }

  function handleCategoryChange(e) {
    setNewTask({...newTask, category: e});
  }

  function handleSubmit(e) {
    e.preventDefault();
    let isValid = true;
    if (newTask.title === "" || newTask.category === "") {
      isValid = false;
    }

    if (isValid) {
      dispatch(addNewTask(newTask));
      setNewTask({...newTask, title: "", category: ""});
    }
  }

  useEffect(() => {
    const categories = Array.from(document.querySelectorAll(`.category`));
    const value = categories[0].getAttribute("data-category");
    if (value) {
      setNewTask({...newTask, category: value});
    }
  }, []);

  return (
    <form className="new-task-input" onSubmit={handleSubmit}>
    	<input className="task-input" type="text" name="newTask" placeholder="Task Title" onChange={handleChange} value={newTask.title} />
      <NewTaskCategories category={handleCategoryChange} />
      <input type="submit" className="submit" value="+ ADD TASK" />
    </form>
  )
}

export default TaskForm;