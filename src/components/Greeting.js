import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting, selectGreeting } from '../redux/greeting/greettingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector(selectGreeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <div>
      <h1>Random Greeting</h1>
      {greeting && <p>{greeting}</p>}
    </div>
  );
};

export default Greeting;
