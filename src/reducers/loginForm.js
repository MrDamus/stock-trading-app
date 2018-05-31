const INITIAL_STATE = {
  name: "xyz",
  email: "xyz@gmail.com",
  password: "xyz"
}

const loginForm = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INPUT_NAME':
      return {
        ...state,
        name: action.payload
      }
    default:
      return state
  }
}

export default loginForm