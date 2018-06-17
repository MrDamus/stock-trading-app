function buyStockTransaction(id, transactionDetails, token) {
   return fetch(`http://localhost:8080/v1/transaction/buy/${id}`, {
        method: 'POST',
        body: JSON.stringify(transactionDetails),
        headers: {
          'content-type': 'application/json',
          'Authorization': `${token.tokenType} ${token.accessToken}`
        },
    })
    .then(data => data.json())
  }

  function sellStockTransaction(email, transactionDetails, token) {
    return fetch(`http://localhost:8080/v1/transaction/sell/${email}`, {
         method: 'PUT',
         body: JSON.stringify({ date: transactionDetails, amount: 1 }),
         headers: {
           'content-type': 'application/json',
           'Authorization': `${token.tokenType} ${token.accessToken}`
         },
     })
     .then(data => data.json())
   }

  function login(email, password) {
    console.log(email, password)
    return fetch('http://localhost:8080/v1/auth/login', {
      method: 'POST',
      body: JSON.stringify({ password, email }),
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(data => data.json())
  }

  export function createNewUser(user) {
    return fetch('http://localhost:8080/v1/auth/register', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      },
    })
      .then((data) => data.json())
      }


  export function updateUserState(token) {
    return fetch('http://localhost:8080/v1/users/profile', {
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
  updateUserState
}