import { USER_NAME, PASSWORD } from "../../constants/Strings";

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

export const login = (uName, pswd) => dispatch => {
  dispatch(authInProgress(true))
  if (uName === USER_NAME && pswd === PASSWORD) {
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