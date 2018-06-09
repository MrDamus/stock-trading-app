const INITIAL_STATE = {
  inProgress: 0,
  message: ""
}

const transactions = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SELECT_VALUE':
      return {
        ...state,
        inProgress: action.payload
      }
    default:
      return state
  }
}

export default transactions