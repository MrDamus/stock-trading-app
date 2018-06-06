import userService from "../services/user";

export const selectCompany = (payload) => ({
  type: 'SELECT_COMPANY',
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

export const sellStockSuccess = (payload) => ({
  type: 'SELL_STOCK_ERROR',
  payload
})

export const sellStockError = (payload) => ({
  type: 'SELL_STOCK_ERROR',
  payload
})

export const inputValue = (payload) => ({
  type: 'INPUT_VALUE',
  payload
})

export function buyStock() {
  return function (dispatch, getState) {
    const { details } = getState().stockData;
    const { user } = getState().userData;
    const { amount } = getState().stockPicker;

    const transactionDetails = {
      symbol: details.symbol,
      companyName: details.companyName,
      amount: amount,
      price: details.latestPrice,
      date: Date.now()
    }

    return userService.makeTransaction(user.email, transactionDetails, 'buy').then(
      getState => dispatch(buyStockSuccess(getState)),
      error => dispatch(buyStockError(error))
    );
  };
}

export function sellStock() {
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
    
    return userService.makeTransaction(user.email, transactionDetails, 'sell').then(
      getState => dispatch(sellStockSuccess(getState)),
      error => dispatch(sellStockError(error))
    );
  };
}

const serverUrl = 'http://localhost:8080/users/'

export function clearDatabase(e) {
  fetch(serverUrl, {
    method: 'DELETE',
    body: e,
  })
  console.log('All records from database has been cleared.')
}