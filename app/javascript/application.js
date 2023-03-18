import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Grettings from './components/Greetings';
import store from './redux/configStore';

function App() {
  return (
    <Provider store={store}>
      <Grettings />
    </Provider>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
