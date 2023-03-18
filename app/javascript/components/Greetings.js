import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetings } from '../redux/greetings';

function Grettings() {
  const dispatch = useDispatch();
  const { loading, grettings } = useSelector((state) => state.greetingsReducer);

  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  console.log(loading);
  return (
    <div>
      {grettings.map((gretting) => (
        <p key={gretting.id}>
          {gretting.message}
        </p>
      ))}
    </div>
  );
}

export default Grettings;
