import { combineReducers } from 'redux';
import { sendUrlReducer } from './sendUrlReducer'

const rootReducer = combineReducers({
  url: sendUrlReducer,
});

export default rootReducer;