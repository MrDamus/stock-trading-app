const INITIAL_STATE = {
  chartData: [],
  details: [],
  finances: []
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
    case 'GET_COMPANY_FINANCES_SUCCESS':
    return {
      ...state,
      finances: action.payload.financials
    }
    default:
      return state
  }
} 

export default stockData