import { useDispatch, useSelector } from "react-redux";
import { handleTaskChange, remTask } from "../rtk/slices/currentUserSlice.js";

const Task = ({ values, index }) => {
	const dispatch = useDispatch();

	function handleClick() {
		dispatch(handleTaskChange(values));
	}

	function handleTaskRem(values) {
		dispatch(remTask(values));
	}

  return (
  	<div className="task-container">
   		<label htmlFor={index} className="task">
   			<input id={index} type="checkbox" className="checkbox" checked={values.isDone} onChange={handleClick} />
   			{values.title}
   		</label>
   		<i className="fa-regular fa-trash-can task-rem-btn" onClick={() => handleTaskRem(values)}></i>
    </div>
  )
}

export default Task;