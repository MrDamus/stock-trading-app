import companyFinancesService from "../services/companyFinances";

export const getCompanyFinancesSuccess = (payload) => ({
  type: 'GET_COMPANY_FINANCES_SUCCESS',
  payload
})

export const getCompanyFinancesError = (payload) => ({
  type: 'GET_COMPANY_FINANCES_ERROR',
  payload
})

export function getCompanyFinances(symbol) {
  return function (dispatch) {
    return companyFinancesService.getCompanyFinances(symbol)
    .then(
      finances => dispatch(getCompanyFinancesSuccess(finances)),
      error => dispatch(getCompanyFinancesError(error))
    );
  };
}