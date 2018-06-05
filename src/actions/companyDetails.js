import companyDetailsService from "../services/companyDetails";

export const getCompanyDetailsSuccess = (payload) => ({
  type: 'GET_COMPANY_DETAILS_SUCCESS',
  payload
})

export const getCompanyDetailsError = (payload) => ({
  type: 'GET_COMPANY_DETAILS_ERROR',
  payload
})

export function getCompanyDetails(symbol) {
  return function (dispatch) {
    return companyDetailsService.getCompanyDetails(symbol).then(
      getState => dispatch(getCompanyDetailsSuccess(getState)),
      error => dispatch(getCompanyDetailsError(error))
    );
  };
}