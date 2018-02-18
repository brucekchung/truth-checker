export const ratingReducer = (state = null, action) => {
  switch (action.type) {
    case 'RATING':
      return action.payload
    default:
      return state
  }
}