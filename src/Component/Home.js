import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { addCurrentUser } from "../rtk/slices/currentUserSlice.js";

import Avatar from "./Avatar.js";
import Greeting from "./Greeting.js";
import ViewMod from "./ViewMod.js";
import CategoryCard from "./CategoryCard.js";
import userDataTemplate from "../userDataTemplate.js";
import HomeThemeSingle from "./HomeThemeSingle.js";
import HomeThemeMulti from "./HomeThemeMulti.js";

import "../css/home.css";

const Home = (props) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const currentUser = useSelector((state) => state.currentUser[0]);
  const navigate = useNavigate();
  const [user, setUser] = useState(userDataTemplate);
  const [isSingle, setIsSingle] = useState(true);

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

  function handleIsSingle(value) {
    setIsSingle(value);
  }

  return (
    <div className="home">
      <div className="container">
        <Link to="/settings" className="gear"><i className="fa-solid fa-gear"></i></Link>
        <Avatar img={user.img} />
        <div>
          <Greeting name={user.fName} tasksCount={getCountOfTasks()} isSingle={handleIsSingle} />
        </div>
        <div className="categories single">
          {
            isSingle ? <HomeThemeSingle user={user} /> : <HomeThemeMulti user={user} />
          }
        </div>
      </div>
    </div>
  );
}

export default Home;