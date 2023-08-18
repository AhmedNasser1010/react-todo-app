import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();

  useEffect(() => {
    if (!(localStorage.currentUser || sessionStorage.currentUser)) {
      navigate("/login");
    }
  }, [])

  return (<h1>Home</h1>)
}

export default Home;