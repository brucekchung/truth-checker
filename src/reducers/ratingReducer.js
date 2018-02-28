export const ratingReducer = (state = {}, action) => {
  switch (action.type) {
    case 'RATING':
      return action.payload
    default:
      return state
  }
}