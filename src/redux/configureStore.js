import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import salutesReducer from './salutes/salutes';

const reducer = combineReducers({
  salutesReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
