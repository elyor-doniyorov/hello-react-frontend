import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { saluteReducer } from './Salutes';

const reducer = combineReducers({
  saluteReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));
export default store;
