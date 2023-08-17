import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from "../rtk/slices/tasksSlice.js";

const Home = (props) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.tasks);

  return (
    <>
      <div>Home - {count}</div>
      <button onClick={() => dispatch(increment(1))}>incre</button>
    </>
  )
}

export default Home;