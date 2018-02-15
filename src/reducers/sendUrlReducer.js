export const sendUrlReducer = (state = '', action) => {
  switch (action.type) {
    case 'SEND_URL':
      return action.payload
    default:
      return state
  }
}