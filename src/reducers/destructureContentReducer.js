export const destructureContentReducer = (state = null, action) => {
  switch (action.type) {
    case 'DESTRUCTURE_CONTENT':
      return action.payload
    default:
      return state
  }
}