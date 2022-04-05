import {initState} from '../InitState';
import {rootReducer} from './rootReducer/RootReducer';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

export const store = createStore(
  rootReducer,
  initState,
  composeWithDevTools(applyMiddleware())
);
