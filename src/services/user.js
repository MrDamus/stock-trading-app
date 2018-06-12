function buyStockTransaction(email, transactionDetails) {
   return fetch(`http://localhost:8080/users/buy/${email}`, {
        method: 'PUT',
        body: JSON.stringify(transactionDetails),
        headers: {
          'content-type': 'application/json'
        },
    })
    .then(data => data.json())
  }

  function sellStockTransaction(email, transactionDetails) {
    return fetch(`http://localhost:8080/users/sell/${email}`, {
         method: 'PUT',
         body: JSON.stringify({ date: transactionDetails, amount: 1 }),
         headers: {
           'content-type': 'application/json'
         },
     })
     .then(data => data.json())
   }

  function login(email, password) {
    return fetch(`http://localhost:8080/users/${email}`, {
      method: 'POST',
      body: JSON.stringify({ password: password }),
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(data => data.json())
  }

  export function createNewUser(user) {
    return fetch('http://localhost:8080/users/', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      },
    })
      .then((data) => data.json())
      }


  export function updateUserState(user) {
        return fetch('http://localhost:8080/users', {
          method: 'GET',
          body: JSON.stringify(user),
          headers: {
            'content-type': 'application/json'
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