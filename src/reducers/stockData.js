const INITIAL_STATE = {
  chartData: [],
  details: []
}

const stockData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SELECT_COMPANY':
      return {
        ...state,
        details: action.payload.details,
        chartData: action.payload.chartData
      }
    default:
      return state
  }
}

export default stockData