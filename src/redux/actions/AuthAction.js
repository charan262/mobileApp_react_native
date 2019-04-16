import { USER_NAME, PASSWORD } from "../../constants/Strings";

const validAuth = payload => (
    {
      type: 'VALID_AUTH',
      payload,
    }
  );

  export const login = (uName, pswd) => dispatch => {
      if(uName === USER_NAME && pswd === PASSWORD) {
        dispatch(validAuth(true));
      } else {
        dispatch(validAuth(false));
      }
  }