import ViewMod from "./ViewMod.js";

const Greeting = (props) => {
  return (
    <div className="greeting">
    	<h1>Hello, {props.name}</h1>
      <div>
    	  <span>You Have <span className="tasks-count">{props.tasksCount} New Tasks</span> Today</span>
        <ViewMod />
      </div>
    </div>
  )
}

export default Greeting;