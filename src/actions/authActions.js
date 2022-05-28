import {
  GET_USER,
  LOAD_USER,
  LOG_IN,
  LOG_IN_FAILED,
  LOG_OUT,
  NOT_LOADED_YET,
  SET_LOADING,
  SIGN_UP,
  SIGN_UP_FAILED,
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
  getUser(user) {
    return {
      type: GET_USER,
      payload: user,
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
  loadUserFailed() {
    return {
      type: NOT_LOADED_YET,
    };
  },
  setLoading() {
    return {
      type: SET_LOADING,
    };
  },
  logout() {
    return {
      type: LOG_OUT,
    };
  },
};

export default authActions;
