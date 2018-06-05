const INITIAL_STATE = {
  inputValue: ''
}

const searchBoxValue = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_BOX_VALUE':
      return {
        ...state,
        inputValue: action.payload
      }
    default:
      return state
  }
}

export default searchBoxValue