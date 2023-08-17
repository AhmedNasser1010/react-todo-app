import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Tasks = (props) => {
	const { category } = useParams();

  return (
    <div>Tasks {category}</div>
  )
}

export default Tasks;