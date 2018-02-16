import { combineReducers } from 'redux';
import { sendUrlReducer } from './sendUrlReducer'
import { destructureContentReducer } from './destructureContentReducer'

const rootReducer = combineReducers({
  url: sendUrlReducer,
  content: destructureContentReducer,
});

export default rootReducer;