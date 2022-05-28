import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import authReducer from "../reducer/authReducer";
import cartReducer from "../reducer/cartReducer";
import rootSaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers({ cart: cartReducer, auth: authReducer });

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
