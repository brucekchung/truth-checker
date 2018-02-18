export const errorReducer = (state = null, action) => {
  switch (action.type) {
    case 'ERROR':
      return action.payload
    default:
      return state
  }
}