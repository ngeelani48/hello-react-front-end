import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomGreeting } from '../redux/greetings/greetingSlice';

const Greeting = () => {
  const { message, isLoading } = useSelector((state) => state.greeting);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, []);
  if (isLoading) {
    return <h1>Loading.....</h1>;
  }
  return <h1>{message.greeting}</h1>;
};

export default Greeting;
