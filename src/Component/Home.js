import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { addCurrentUser } from "../rtk/slices/currentUserSlice.js";

import Container from "./Container.js";
import Avatar from "./Avatar.js";
import Greeting from "./Greeting.js";
import ViewMod from "./ViewMod.js";
import CategoryCard from "./CategoryCard.js";
import userDataTemplate from "../userDataTemplate.js";
import HomeThemeSingle from "./HomeThemeSingle.js";
import HomeThemeMulti from "./HomeThemeMulti.js";

import "../css/home.css";

import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';

const Home = (props) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const currentUser = useSelector((state) => state.currentUser[0]);
  const navigate = useNavigate();
  const [user, setUser] = useState(userDataTemplate);
  const [isSingle, setIsSingle] = useState(true);

  // swiper config
  const swiper = new Swiper('.swiper', {
    // Install modules
    modules: [Navigation, Pagination, Scrollbar],
  
    // Optional parameters
    loop: true,
    speed: 400,
    spaceBetween: 100,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

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
      <Container>
        <Link to="/settings" className="gear"><i className="fa-solid fa-gear"></i></Link>
        <Avatar img={user.url} />
        <div>
          <Greeting name={user.fName} tasksCount={getCountOfTasks()} isSingle={handleIsSingle} />
        </div>
        <div className="categories single">
          {
            isSingle ? <HomeThemeSingle user={user} /> : <HomeThemeMulti user={user} />
          }
        </div>
      </Container>
    </div>
  );
}

export default Home;