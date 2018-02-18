export const cleanArticleReducer = (state = null, action) => {
  switch (action.type) {
    case 'CLEAN_ARTICLE': 
      return action.payload
    default: 
      return state
  }
}