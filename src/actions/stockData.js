import stockDataService from "../services/stockData";


export const fetchSuccess = (payload) => ({
  type: 'FETCH_COMPANIES_SUCCESS',
  payload
})

export const fetchError = (payload) => ({
  type: 'FETCH_COMPANIES_ERROR',
  payload
})


export function fetchCompaniesData() {
  return function (dispatch) {
    return stockDataService.fetchAllCompanies().then(
      getState => dispatch(fetchSuccess(getState)),
      error => dispatch(fetchError(error))
    );
  };
}
