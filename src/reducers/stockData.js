const INITIAL_STATE = {
  chartData: [],
  details: []
}

const stockData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_COMPANY_DETAILS_SUCCESS':
      return {
        ...state,
        details: action.payload.quote,
        chartData: action.payload.chart
      }
    default:
      return state
  }
}

export default stockData