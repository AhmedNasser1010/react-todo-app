import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { addCurrentUser } from "../rtk/slices/currentUserSlice.js";

import SettingsBtn from "./SettingsBtn.js";
import Avatar from "./Avatar.js";
import Greeting from "./Greeting.js";
import ViewMod from "./ViewMod.js";
import CategoryCard from "./CategoryCard.js";

const Home = (props) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const currentUser = useSelector((state) => state.currentUser[0]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!(localStorage.currentUser || sessionStorage.currentUser)) {
      navigate("/login");
    } else {
      dispatch(addCurrentUser());
    }
  }, [])

  function getCountOfTasks() {
    return currentUser.data.tasks.filter((task) => {
      if (!task.isDone) {
        return true;
      }
    })
  }

  return (

    <div className="home">
      <SettingsBtn />
      <Avatar img={currentUser.url} />
      <div>
        <Greeting name={currentUser.fName} tasksCount={getCountOfTasks().length} />
        <ViewMod />
      </div>
      <div className="categories">
        {
          currentUser.data.categories.map((cat) => (
            <CategoryCard key={cat.title} img={cat.icon} categoryTitle={cat.title} />
          ))
        }
      </div>
      <Link to="/new" className="add-new-task">+</Link>
    </div>

  )
}

export default Home;