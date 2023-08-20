import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { handleTaskChange } from "../rtk/slices/currentUserSlice.js";

const Task = ({ values }) => {
	const [isChecked, setIsChecked] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		setIsChecked(values.isDone);
	}, [])

	function handleClick(value) {
		dispatch(handleTaskChange(values));
	}

  return (
    <div className="task" onClick={() => handleClick(values)}>
    	<input type="checkbox" className="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
    	<h3 className="discreption">{values.title}</h3>
    </div>
  )
}

export default Task;