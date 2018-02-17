import { combineReducers } from 'redux';
import { sendUrlReducer } from './sendUrlReducer'
import { destructureContentReducer } from './destructureContentReducer'
import { cleanArticleReducer } from './cleanArticleReducer'

const rootReducer = combineReducers({
  url: sendUrlReducer,
  rawContent: destructureContentReducer,
  cleanArticle: cleanArticleReducer,
})  

export default rootReducer