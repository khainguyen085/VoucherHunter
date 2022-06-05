import {
  all,
  call,
  delay,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import {
  LOAD_USER,
  LOGIN_GOOGLE,
  LOG_IN,
  SIGN_UP,
} from "../actions/actionType";
import authActions from "../actions/authActions";
import API from "../services/api";
import { setAuthToken } from "../utils/setAuthToken";

function* signupWork({ payload: userInfo }) {
  try {
    const token = yield call(API.signup, userInfo);
    localStorage.token = token;
    yield put(authActions.loadUser());
  } catch (err) {
    yield put(authActions.signUpFailed(err.response?.data.msg));
    console.log(err);
  }
}

function* signupWatch() {
  yield takeLatest(SIGN_UP, signupWork);
}

function* loginWork({ payload: userInfo }) {
  try {
    const token = yield call(API.login, userInfo);
    localStorage.token = token;
    yield put(authActions.loadUser());
  } catch (err) {
    console.log(err.response?.data.msg);
    yield put(authActions.loginFailed(err.response?.data.msg));
  }
}

function* loginWatch() {
  yield takeLatest(LOG_IN, loginWork);
}

function* loadUserWork() {
  try {
    const token = localStorage.token;
    if (token) {
      setAuthToken(token);
      const user = yield call(API.loadUser);
      yield put(authActions.setLoading());
      yield delay(500);
      yield put(authActions.getUser(user));
    } else {
      yield put(authActions.loadUserFailed());
    }
  } catch (err) {
    yield put(authActions.loadUserFailed());
    console.log(err);
  }
}

function* loadUserWatch() {
  yield takeEvery(LOAD_USER, loadUserWork);
}

function* loginGoogleWork({ payload: idToken }) {
  try {
    yield put(authActions.setLoading());
    const token = yield call(API.googleLogin, idToken);
    localStorage.token = token;
    setAuthToken(token);
    const user = yield call(API.loadUser);
    yield put(authActions.getUser(user));
  } catch (err) {
    yield put(authActions.loginFailed(err.response?.data.msg));
    console.log(err);
  }
}

function* loginGoogleWatch() {
  yield takeLatest(LOGIN_GOOGLE, loginGoogleWork);
}

export default function* authSagas() {
  yield all([signupWatch(), loadUserWatch(), loginWatch(), loginGoogleWatch()]);
}
