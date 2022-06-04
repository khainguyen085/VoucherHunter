import {
  CLEAR_ERROR,
  GET_USER,
  LOG_IN_FAILED,
  LOG_OUT,
  NOT_LOADED_YET,
  SET_LOADING,
  SIGN_UP_FAILED,
} from "../actions/actionType";

const inititalState = {
  user: null,
  loading: true,
  error: null,
};

const authReducer = (state = inititalState, action) => {
  switch (action.type) {
    case LOG_IN_FAILED:
    case SIGN_UP_FAILED:
      localStorage.removeItem("token");

      return {
        user: null,
        loading: false,
        error: action.payload,
      };

    case LOG_OUT:
    case NOT_LOADED_YET:
      localStorage.removeItem("token");

      return {
        ...state,
        user: null,
        loading: false,
        error: null,
      };

    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null,
      };

    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default authReducer;
