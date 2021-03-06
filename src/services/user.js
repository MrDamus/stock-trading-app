import { SERVER_URL, ENDPOINTS } from "../config";

function buyStockTransaction(id, transactionDetails, token) {
   return fetch(`${SERVER_URL}${ENDPOINTS.BUY}${id}`, {
        method: 'POST',
        body: JSON.stringify(transactionDetails),
        headers: {
          'content-type': 'application/json',
          'Authorization': `${token.tokenType} ${token.accessToken}`
        },
    })
    .then(data => data.json())
  }

  function sellStockTransaction(userID, transactionDetails, token) {
    return fetch(`${SERVER_URL}${ENDPOINTS.SELL}${userID}`, {
         method: 'POST',
         body: JSON.stringify({ ...transactionDetails }),
         headers: {
           'content-type': 'application/json',
           'Authorization': `${token.tokenType} ${token.accessToken}`
         },
     })
     .then(data => data.json())
   }

  function login(email, password) {
    console.log(email, password)
    return fetch(`${SERVER_URL}${ENDPOINTS.LOGIN}`, {
      method: 'POST',
      body: JSON.stringify({ password, email }),
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(data => data.json())
  }

  export function createNewUser(user) {
    return fetch(`${SERVER_URL}${ENDPOINTS.REGISTER}`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      },
    })
      .then((data) => data.json())
      }

  export function getProfile(token) {
    return fetch(`${SERVER_URL}${ENDPOINTS.PROFILE}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `${token.tokenType} ${token.accessToken}`
      }
    })
    .then(data => data.json())
  }

  export function handleErrors(response) {
    if (!response.ok) {
      throw response.json();
    }
    return response;
  }

export default {
  buyStockTransaction,
  sellStockTransaction,
  login,
  createNewUser,
  handleErrors,
  getProfile
}