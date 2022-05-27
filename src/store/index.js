import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import cartReducer from "../reducer/cartReducer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(cartReducer, applyMiddleware(sagaMiddleware));

export default store;
