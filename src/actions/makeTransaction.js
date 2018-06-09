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
    const { user } = getState().userData;
    const { amount } = getState().stockPicker;

    const transactionDetails = {
      symbol: details.symbol,
      companyName: details.companyName,
      amount: amount,
      price: details.latestPrice,
      date: Date.now()
    }

    return userService.buyStockTransaction(user.email, transactionDetails)
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

export function sellStock(transactionId) {
  return function (dispatch, getState) {
    const { user } = getState().userData;
    return userService.sellStockTransaction(user.email, transactionId)
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
