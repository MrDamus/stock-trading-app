import userService from "../services/user";

export const getProfileSuccess = (payload) => ({
  type: 'GET_PROFILE_SUCCESS',
  payload
})

export const getProfileError = (payload) => ({
  type: 'GET_PROFILE_ERROR',
  payload
})

export function getProfile(symbol) {
  return function (dispatch) {
    return userService.getProfile(symbol)
    .then(
      getState => dispatch(getProfileSuccess(getState)),
      error => dispatch(getProfileError(error))
    );
  };
}