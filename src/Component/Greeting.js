import React from 'react';

const Greeting = (props) => {
  return (
    <div className="greeting">
    	<h1>Hello, {props.name}</h1>
    	<span>You Have {props.tasksCount} Tasks Today</span>
    </div>
  )
}

export default Greeting;