import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetings } from '../redux/greetings';

function Grettings() {
  const dispatch = useDispatch();
  const { loading, greetings } = useSelector((state) => state.greetingsReducer);

  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  return (
    <div>
      { loading ? (
        <div className="d-flex justify-content-center mt-5">
          <span className="mt-5 h3">Loading...</span>
        </div>
      ) : (
        greetings.map((greeting) => (
          <div key={greeting.id}>
            <p>{greeting.message}</p>
            <p>{greeting.language}</p>
          </div>
        )))}
    </div>
  );
}

export default Grettings;
