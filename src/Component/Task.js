import { useDispatch, useSelector } from "react-redux";
import { handleTaskChange, remTask } from "../rtk/slices/currentUserSlice.js";
import { useEffect } from "react";

const Task = ({ values, index, deleteVisibility }) => {
	const dispatch = useDispatch();
	function handleClick(e) {
		const target = e.target;
		const targetParent = target.parentElement.parentElement;
		const value = target.checked;

		dispatch(handleTaskChange(values));
		
		if (value) {
			targetParent.classList.add("checked");
			targetParent.style.order = -1;
			target.style.visibility = "hidden";
		} else {
			targetParent.classList.remove("checked");
			targetParent.style.order = "unset";
			target.style.visibility = "visible";
		}
	}

	function handleTaskRem(values) {
		dispatch(remTask(values));
	}

	useEffect(() => {
		const eleArr = Array.from(document.querySelectorAll(".task-container"));

		eleArr.map(ele => {
			const input = ele.children[0].children[0];
			if (input.checked) {
				ele.classList.add("checked");
				ele.style.order = -1;
				input.style.visibility = "hidden";
			}
		})
	}, [])

  return (
  	<div className="task-container">
   		<label htmlFor={values.id} className="task">
   			<input id={values.id} type="checkbox" className="checkbox" checked={values.isDone} onChange={handleClick} />
   			<span className="custom-checkbox"></span>
   			<span className="task-title">
   				{values.title}
   				{
   					deleteVisibility && <i className="fa-regular fa-trash-can task-rem-btn" onClick={() => handleTaskRem(values)}></i>
   				}
   			</span>
   		</label>
    </div>
  )
}

export default Task;