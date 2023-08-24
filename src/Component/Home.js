import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { addCurrentUser } from "../rtk/slices/currentUserSlice.js";

import Avatar from "./Avatar.js";
import Greeting from "./Greeting.js";
import ViewMod from "./ViewMod.js";
import CategoryCard from "./CategoryCard.js";
import userDataTemplate from "../userDataTemplate.js";

import "../css/home.css";

const Home = (props) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const currentUser = useSelector((state) => state.currentUser[0]);
  const navigate = useNavigate();
  const [user, setUser] = useState(userDataTemplate);

  useEffect(() => {
    if (!(localStorage.currentUser || sessionStorage.currentUser)) {
      navigate("/login");
    } else {
      dispatch(addCurrentUser());
    }
  }, []);

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  function getCountOfTasks() {
    const filtered = user.data.tasks.filter((task) => {
      if (!task.isDone) {
        return true;
      }
    })

    return filtered.length
  }

  return (

    <div className="home">
      <Link to="/settings" className="gear"><i className="fa-solid fa-gear"></i></Link>
      <Avatar img={user.url} />
      <div>
        <Greeting name={user.fName} tasksCount={getCountOfTasks()} />
      </div>
      <div className="categories single">
        {
          user.data.categories.map((cat, index) => (
            <CategoryCard key={index} category={cat} />
          ))
        }
        {
          user.data.categories.length === 0 && <span className="zero-tasks">There is No Categories Here<br /><Link to="/new/add-category">Add New!</Link></span>
        }
        <Link to="/new" className={`add-new-task ${user.data.categories.length % 2 === 0 ? "duble" : ""}`}><i className="fa-solid fa-plus"></i></Link>
      </div>
    </div>

  )
}

export default Home;