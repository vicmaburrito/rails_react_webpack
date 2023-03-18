import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetings } from '../redux/greetings';
import Gretting from './greeting';
import Loading from './loading';

function Greetings() {
  const dispatch = useDispatch();
  const { loading, greetings } = useSelector((state) => state.greetingsReducer);

  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  return (
    <>
      { loading ? (
        <Loading />
      ) : (
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Greeting</th>
                <th scope="col">Language</th>
              </tr>
            </thead>
            { greetings.map((greeting, index) => (
              <Gretting
                key={greeting.id}
                message={greeting.message}
                language={greeting.language}
                position={index + 1}
              />
            ))}
          </table>
        </div>
      )}
    </>
  );
}

export default Greetings;
