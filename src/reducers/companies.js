const INITIAL_STATE = {
  companies: []
}

const companiesData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_COMPANIES_SUCCESS':
      return {
        ...state,
        companies: action.payload.map(d => ({ symbol: d.symbol, name: d.name }))
      }
    default:
      return state
  }
}

export default companiesData