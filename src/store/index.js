import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import authReducer from "../reducers/authReducer";
import cartReducer from "../reducers/cartReducer";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers({ cart: cartReducer, auth: authReducer });

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
