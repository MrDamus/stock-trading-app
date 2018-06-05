import userService from "../services/user";

export const selectCompany = (payload) => ({
  type: 'SELECT_COMPANY',
  payload
})

export const loginSuccess = (payload) => ({
  type: 'LOGIN_SUCCESS',
  payload
})

export const loginError = (payload) => ({
  type: 'LOGIN_ERROR',
  payload
})

export const createNewUserSuccess = (payload) => ({
  type: 'CREATE_NEW_USER_SUCCESS',
  payload
})

export const createNewUserError = (payload) => ({
  type: 'CREATE_NEW_USER_ERROR',
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

export const inputName = (payload) => ({
  type: 'INPUT_NAME',
  payload
})

export const inputEmail = (payload) => ({
  type: 'INPUT_EMAIL',
  payload
})

export const inputPassword = (payload) => ({
  type: 'INPUT_PASSWORD',
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

    return userService.makeTransaction(user.email, transactionDetails).then(
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
    
    return userService.makeTransaction(user.email, transactionDetails).then(
      getState => dispatch(sellStockSuccess(getState)),
      error => dispatch(sellStockError(error))
    );
  };
}

const serverUrl = 'http://localhost:8080/users/'

export function login() {
  return function (dispatch, getState) {
    const user  = getState().loginForm;
    return userService.login(user.email, user.password).then(
      getState => dispatch(loginSuccess(getState)) ,
      error => {
        dispatch(loginError(error))
        throw new Error(error)
      }
    );
  };
}

export function createNewUser() {
  return function (dispatch, getState) {
    const user  = getState().loginForm;

    return userService.createNewUser(user)
    .then(
      getState => dispatch(createNewUserSuccess(getState)) ,
      error => {
        dispatch(createNewUserError(error))
        throw new Error(error)
      }
    );
  };
}

// export function createNewUser(user) {
//   return fetch(serverUrl, {
//     method: 'POST',
//     body: JSON.stringify(user),
//     headers: {
//       'content-type': 'application/json'
//     },
//   })
//     .then(this.handleErrors)
//     .then((data) => data.json())
//     .then(() => this.props.history.push('/profile'))
//     .catch(e => {
//       Promise.resolve(e)
//         .then(a => alert(a.error))
//     })
// }

export function clearDatabase(e) {
  fetch(serverUrl, {
    method: 'DELETE',
    body: e,
  })
  console.log('All records from database has been cleared.')
}

// export function handleErrors(response) {
//   if (!response.ok) {
//     throw response.json();
//   }
//   return response;
// }

export function getCompanyDetails(symbol) {
  fetch(`${'https://api.iextrading.com/1.0/'}/stock/${symbol}/batch?types=quote,chart`)
    .then(response => response.json())
    .then(data => this.props.selectProfile({ details: data.quote, chartData: data.chart  }))
    .then(() => this.props.history.push('/info'))
    .catch(e => console.warn('Fetching error:', e));
}