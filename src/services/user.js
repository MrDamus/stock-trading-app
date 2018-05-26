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
  }

export default makeTransaction