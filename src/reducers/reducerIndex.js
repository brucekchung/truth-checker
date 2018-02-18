import { combineReducers } from 'redux'
import { cleanArticleReducer } from './cleanArticleReducer'
import { errorReducer } from './errorReducer'
import { ratingReducer } from './ratingReducer'

const rootReducer = combineReducers({
  error: errorReducer,
  rating: ratingReducer,
  cleanArticle: cleanArticleReducer,
})  

export default rootReducer