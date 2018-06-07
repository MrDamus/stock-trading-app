const INITIAL_STATE = {
  user: {
    "_id": "5b0c4e1fc789150e2f8caa99",
"name": "xyz",
"email": "xyz@gmail.com",
"password": "xyz",
"wallet": [
  {
      "symbol": "LOMA",
      "companyName": "Loma Negra Compania Industrial Argentina Sociedad Anonima ADS",
      "amount": "11",
      "price": 12.62,
      "date": 1527593176915
  },
  {
      "symbol": "LOMA",
      "companyName": "Loma Negra Compania Industrial Argentina Sociedad Anonima ADS",
      "amount": "11",
      "price": 12.62,
      "date": 1527593181611
  },
  {
      "symbol": "AAPL",
      "companyName": "Apple Inc.",
      "amount": "0",
      "price": 188.58,
      "date": 1527593220698,
      "sold": true
  }
],
"money": 500
  },
}

const userData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}

export default userData