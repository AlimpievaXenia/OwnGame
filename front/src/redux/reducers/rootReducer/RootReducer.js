import { combineReducers } from 'redux';
import { questionsReducer } from '../questionsReducer/questionsReducer';
import { userReducer } from '../userReducer/userReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  questions: questionsReducer
})
