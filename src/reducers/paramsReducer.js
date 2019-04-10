export default (state = '', action) => {
  switch (action.type) {
  case 'PARAMS_ACTION':
    return action.payload
  default:
    return state
  }
}
