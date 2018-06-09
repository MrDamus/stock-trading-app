import userService from "../services/user";

export const inputName = (payload) => ({
  type: 'INPUT_NAME',
  payload
})

export const inputEmail = (payload) => ({
  type: 'INPUT_EMAIL',
  payload
})

export const inputPassword = (payload) => ({
  type: 'INPUT_PASSWORD',
  payload
})

export const loginSuccess = (payload) => ({
  type: 'LOGIN_SUCCESS',
  payload
})

export const loginError = (payload) => ({
  type: 'LOGIN_ERROR',
  payload
})

export const createNewUserSuccess = (payload) => ({
  type: 'CREATE_NEW_USER_SUCCESS',
  payload
})

export const createNewUserError = (payload) => ({
  type: 'CREATE_NEW_USER_ERROR',
  payload
})

export function login() {
  return function (dispatch, getState) {
    const user  = getState().loginForm;
    console.log(user)
    return userService.login(user.email, user.password).then(
      getState => dispatch(loginSuccess(getState)) ,
      error => {
        dispatch(loginError(error))
        throw new Error(error)
      }
    );
  };
}

export function createNewUser() {
  return function (dispatch, getState) {
    const user  = getState().loginForm;

    return userService.createNewUser(user)
    .then(
      getState => dispatch(createNewUserSuccess(getState)) ,
      error => {
        dispatch(createNewUserError(error))
        throw new Error(error)
      }
    );
  };
}