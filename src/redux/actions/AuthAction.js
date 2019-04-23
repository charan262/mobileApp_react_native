import Strings from "../../constants/Strings";

const validAuth = payload => (
  {
    type: 'VALID_AUTH',
    payload,
  }
);

const authInProgress = payload => ({
  type: 'AUTH_IN_PROGRESS',
  payload
})

export const removeError = payload => ({
  type: 'REMOVE_ERROR',
  payload
})

export const login = (uName, pswd) => dispatch => {
  dispatch(authInProgress(true))
  if (uName === Strings.USER_NAME && pswd === Strings.PASSWORD) {
    setTimeout(() => {
      dispatch(authInProgress(false))
      dispatch(validAuth({ authCheck: true, error: ''}));
    }, 1*1000); 
  } else {
    setTimeout(() => {
      dispatch(authInProgress(false))
      dispatch(validAuth({ authCheck: false, error: 'User name or password is wrong!'}));
    }, 1*1000); 
  }
}