import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/configureStore';
import Greeting from './Greeting';
import './App.css';

const App = () => (
  <Provider store={store}>
    <Greeting />
  </Provider>
);

export default App;
