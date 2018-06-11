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
    case 'GET_COMPANY_CHART_SUCCESS':
    return {
      ...state,
      chartData: action.payload
    }
    default:
      return state
  }
}

export default stockData