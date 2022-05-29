import { all, call, delay, put, takeEvery } from "redux-saga/effects";
import { LOAD_USER, LOG_IN, SIGN_UP } from "../actions/actionType";
import authActions from "../actions/authActions";
import API from "../services/api";
import { setAuthToken } from "../utils/setAuthToken";

function* signupWork({ payload: userInfo }) {
  try {
    const token = yield call(API.signup, userInfo);
    localStorage.token = token;
    yield put(authActions.loadUser());
  } catch (err) {
    yield put(authActions.signUpFailed(err.message));
    console.log(err.message);
  }
}

function* signupWatch() {
  yield takeEvery(SIGN_UP, signupWork);
}

function* loginWork({ payload: userInfo }) {
  try {
    const token = yield call(API.login, userInfo);
    localStorage.token = token;
    yield put(authActions.loadUser());
  } catch (err) {
    yield put(authActions.loginFailed(err.message));
    console.log(err.message);
  }
}

function* loginWatch() {
  yield takeEvery(LOG_IN, loginWork);
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
    console.log(err.message);
  }
}

function* loadUserWatch() {
  yield takeEvery(LOAD_USER, loadUserWork);
}

export default function* authSagas() {
  yield all([signupWatch(), loadUserWatch(), loginWatch()]);
}
