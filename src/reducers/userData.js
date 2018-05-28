const INITIAL_STATE = {
  user: {
    "_id": "5b0c4e1fc789150e2f8caa99",
"name": "xyz",
"email": "xyz@gmail.com",
"password": "xyz",
"wallet": [
{
"symbol": "AAPL",
"amount": "1",
"price": 188.58,
"date": 1527533111900
},
{
"symbol": "AAPL",
"amount": "1",
"price": 188.58,
"date": 1527533114655
},
{
"symbol": "AAPL",
"amount": "2",
"price": 188.58,
"date": 1527540331219
},
{
"symbol": "AZZ",
"amount": "1",
"price": 43,
"date": 1527540350133
},
{
"symbol": "TLK",
"amount": "3",
"price": 24.88,
"date": 1527540363699
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