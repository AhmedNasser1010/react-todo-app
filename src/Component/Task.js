import { useDispatch, useSelector } from "react-redux";
import { handleTaskChange, remTask } from "../rtk/slices/currentUserSlice.js";

const Task = ({ values }) => {
	const dispatch = useDispatch();

	function handleClick() {
		dispatch(handleTaskChange(values));
	}

	function handleTaskRem(values) {
		dispatch(remTask(values));
	}

  return (
  	<div className="task-container">
   		<div className="task" onClick={handleClick}>
   			<input type="checkbox" className="checkbox" checked={values.isDone} />
   			<h3 className="discreption">{values.title}</h3>
   		</div>
   		<i className="fa-regular fa-trash-can task-rem-btn" onClick={() => handleTaskRem(values)}></i>
    </div>
  )
}

export default Task;