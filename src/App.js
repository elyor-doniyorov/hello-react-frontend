/* eslint-disable */
import {
  Route, BrowserRouter as Router, Routes, Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './Greeting';
import About from './About';
import store from './redux/configureStore';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav>
            <ul className="links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" exact component={Greeting} />
            <Route path="/about" component={About} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
