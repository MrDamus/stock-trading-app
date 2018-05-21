const INITIAL_STATE = {
  price: 0,
}

const stockData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SELECT_COMPANY':
    console.warn('SELECT_COMPANY', action.symbol, action.price)
      return {
        ...state,
          symbol: action.symbol,
          price: action.price,
      }
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default stockData