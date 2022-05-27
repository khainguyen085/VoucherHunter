import {
  LOAD_USER,
  LOG_IN,
  LOG_IN_FAILED,
  LOG_IN_SUCCESS,
  SIGN_UP,
  SIGN_UP_FAILED,
  SIGN_UP_SUCCESS,
} from "./actionType";

const authActions = {
  signup(signupInfo) {
    return {
      type: SIGN_UP,
      payload: signupInfo,
    };
  },
  login(loginInfo) {
    return {
      type: LOG_IN,
      payload: loginInfo,
    };
  },
  loadUser() {
    return {
      type: LOAD_USER,
    };
  },
  loginSuccess(info) {
    return {
      type: LOG_IN_SUCCESS,
      payload: info,
    };
  },
  signupSuccess(token) {
    return {
      type: SIGN_UP_SUCCESS,
      payload: token,
    };
  },
  loginFailed() {
    return {
      type: LOG_IN_FAILED,
    };
  },
  signUpFailed() {
    return {
      type: SIGN_UP_FAILED,
    };
  },
};

export default authActions;
