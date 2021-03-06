import userService from "../services/user";
import { login } from "./loginForm";

export const buyStockSuccess = (payload) => ({
  type: 'BUY_STOCK_SUCCESS',
  payload
})

export const buyStockError = (payload) => {
  return {
  type: 'BUY_STOCK_ERROR',
  payload
}
}

export const sellStockSuccess = (payload) => ({
  type: 'SELL_STOCK_SUCCESS',
  payload
})

export const sellStockError = (payload) => {
  return {
  type: 'SELL_STOCK_ERROR',
  payload
}}

export function buyStock() {
  return function (dispatch, getState) {
    const { details } = getState().stockData;
    const { user, token } = getState().userData;
    const { amount } = getState().stockPicker;

    const transactionDetails = {
      symbol: details.symbol,
      amount: amount,
    }

    return userService.buyStockTransaction(user.id, transactionDetails, token)
    .then(data => {
      dispatch(login())
      return data
    })
    .then(
      getState => dispatch(buyStockSuccess(getState)),
      error => dispatch(buyStockError(error))
    )
  };
}

export function sellStock(purchasedStockID, symbol, amount) {
  return function (dispatch, getState) {
    const { user, token } = getState().userData;
    const transactionDetails = {
      symbol,
      id: purchasedStockID,
      amount: amount, 
    }
    return userService.sellStockTransaction(user.id, transactionDetails, token)
    .then(data => {
      dispatch(login())
      return data
    })
    .then(
      getState => dispatch(sellStockSuccess(getState)),
      error => dispatch(sellStockError(error))
    );
  };
}
