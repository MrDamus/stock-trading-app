const INITIAL_STATE = {
  name: "marcin2",
  email: "marcin2@gmail.com",
  password: "marcin2"
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