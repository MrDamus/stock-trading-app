import makeTransaction from "../services/user";

export const selectCompany = (payload) => ({
  type: 'SELECT_COMPANY',
  payload
})

export const loginSuccess = (payload) => ({
  type: 'LOGIN_SUCCESS',
  payload
})

export const selectValue = (payload) => ({
  type: 'SELECT_VALUE',
  payload
})

export const buyStockSuccess = (payload) => ({
  type: 'BUY_STOCK_SUCCESS',
  payload
})

export const buyStockError = (payload) => ({
  type: 'BUY_STOCK_ERROR',
  payload
})


export function buyStock() {
  return function (dispatch, getState) {
    const { details } = getState().stockData;
    const { user } = getState().userData;
    const { amount } = getState().stockPicker;

    const transactionDetails = {
      symbol: details.symbol,
      amount: amount,
      price: details.latestPrice,
      date: Date.now()
    }
    
    return makeTransaction(user.email, transactionDetails, 100).then(
      getState => dispatch(buyStockSuccess(getState)),
      error => dispatch(buyStockError(error))
    );
  };
}