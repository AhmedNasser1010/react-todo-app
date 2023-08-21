import { useDispatch, useSelector } from "react-redux";
import { handleTaskChange } from "../rtk/slices/currentUserSlice.js";

const Task = ({ values }) => {
	const dispatch = useDispatch();

	function handleClick() {
		dispatch(handleTaskChange(values));
	}

  return (
    <div className="task" onClick={handleClick}>
    	<input type="checkbox" className="checkbox" checked={values.isDone} />
    	<h3 className="discreption">{values.title}</h3>
    </div>
  )
}

export default Task;