/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { displaySalutes } from './redux/Salutes';

const Greeting = () => {
  const salutes = useSelector((state) => state.saluteReducer);

  setTimeout(() => {
    window.location.reload(1);
  }, 10000);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!salutes.length) {
      dispatch(displaySalutes());
    }
  }, []);

  const [body, displayBody] = useState([]);

  useEffect(() => {
    displayBody(salutes);
  }, [salutes]);

  const hello = () => {
    const Loading = 'Loading...';
    return body[0]
      ? body[Math.floor(Math.random() * body.length)].greeting
      : Loading;
  };

  return (
    <div className="display">
      <h2>Display random salutes </h2>
      <hr />
      <p>{hello()}</p>
    </div>
  );
};

export default Greeting;
/* eslint-enable no-unused-vars */
