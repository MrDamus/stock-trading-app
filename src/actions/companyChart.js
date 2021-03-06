import companyChartService from "../services/companyChart";

export const getCompanyChartSuccess = (payload) => ({
  type: 'GET_COMPANY_CHART_SUCCESS',
  payload
})

export const getCompanyChartError = (payload) => ({
  type: 'GET_COMPANY_CHART_ERROR',
  payload
})

export function getCompanyChart(symbol, periodOfTime) {
  return function (dispatch) {
    return companyChartService.getCompanyChart(symbol, periodOfTime)
    .then(
      chart => dispatch(getCompanyChartSuccess(chart)),
      error => dispatch(getCompanyChartError(error))
    );
  };
}