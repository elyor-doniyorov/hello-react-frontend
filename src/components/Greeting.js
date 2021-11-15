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
    <>
      <h1>
        <i>{salute}</i>
        !!
      </h1>
    </>
  );
};

export default Greeting;
