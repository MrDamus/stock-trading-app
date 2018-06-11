const INITIAL_STATE = {
  chartData: [],
}

const chartData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_COMPANY_CHART_SUCCESS':
      return {
        ...state,
        chartData: action.payload.chart
      }
    default:
      return state
  }
}

export default chartData