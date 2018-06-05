const INITIAL_STATE = {
  chartData: [],
  details: []
}

const companyDetails = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_COMPANY_DETAILS_SUCCESS':
      return {
        ...state,
        // details: action.payload.details,
        // chartData: action.payload.chartData
        details: action.payload.map(d => ({ details: d.quote, chartData: d.chart }))
          }
    default:
      return state
  }
}

export default companyDetails