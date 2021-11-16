import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSalutesSuccess } from '../redux/salutes/salutes';

const Greeting = () => {
  const dispatch = useDispatch();
  const salute = useSelector((state) => state.salutesReducer.body);

  useEffect(() => {
    dispatch(getSalutesSuccess());
  }, [dispatch]);

  return (
    <div className="display">
      <h2>In order to get random salutes please re-request to server </h2>
      <hr />
      <h1>
        <i>{salute}</i>
        !!
      </h1>
    </div>
  );
};

export default Greeting;
