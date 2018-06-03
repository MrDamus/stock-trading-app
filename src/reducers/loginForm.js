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
        name: action.payload,
      }
      case 'INPUT_EMAIL':
      return {
        ...state,
        email: action.payload,
      }
      case 'INPUT_PASSWORD':
      return {
        ...state,
        password: action.payload,
      }
      default:
        return state
    }
  }

export default loginForm