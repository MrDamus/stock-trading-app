function makeTransaction(email, transactionDetails, money) {
   return fetch(`http://localhost:8080/users/${email}`, {
        method: 'PUT',
        body: JSON.stringify({
          wallet: transactionDetails,
          money
        }),
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
  makeTransaction,
  login,
  createNewUser,
  handleErrors,
  updateUserState
}