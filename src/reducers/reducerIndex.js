import { combineReducers } from 'redux';
import { cleanArticleReducer } from './cleanArticleReducer'
import { errorReducer } from './errorReducer'

const rootReducer = combineReducers({
  error: errorReducer,
  cleanArticle: cleanArticleReducer,
})  

export default rootReducer