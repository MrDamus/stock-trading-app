const INITIAL_STATE = {
  inProgress: 0,
  message: ""
}

const transactions = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'BUY_STOCK_SUCCESS':
      return {
        ...state,
        message: 'Transaction Successfully',
        inProgress: false
      }
    default:
      return state
  }
}

export default transactions