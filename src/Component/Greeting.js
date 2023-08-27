import ViewMod from "./ViewMod.js";

const Greeting = ({ isSingle, name, tasksCount }) => {

  function handleIsSingle(value) {
    isSingle(value);
  }

  return (
    <div className="greeting">
    	<h1>Hello, {name}</h1>
      <div>
    	  <span>You Have <span className="tasks-count">{tasksCount} New Tasks</span> Today</span>
        <ViewMod isSingle={handleIsSingle} />
      </div>
    </div>
  )
}

export default Greeting;