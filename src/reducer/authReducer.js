import {
  LOG_IN_FAILED,
  LOG_IN_SUCCESS,
  LOG_OUT,
  SIGN_UP_FAILED,
  SIGN_UP_SUCCESS,
} from "../actions/actionType";

const inititalState = {
  user: null,
  loading: true,
};

const cartReducer = (state = inititalState, action) => {
  switch (action.type) {
    case LOG_IN_SUCCESS:
    case SIGN_UP_SUCCESS:
      const { user, token } = action.payload;
      localStorage.setItem("token", token);
      return {
        user,
        loading: false,
      };

    case LOG_IN_FAILED:
    case SIGN_UP_FAILED:
      return {
        user: null,
        loading: false,
      };

    case LOG_OUT:
      localStorage.removeItem("token");

      return {
        ...state,
        user: null,
        loading: false,
      };

    default:
      return state;
  }
};

export default cartReducer;
