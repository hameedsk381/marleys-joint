import { combineReducers } from "redux";

import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import {getAllPizzasReducer,addPizzaReducer} from "./reducers/Pizzareducers";

import {CartReducer} from "./reducers/cartReducers";
import { registerUserReducer, getAllUsersReducer } from "./reducers/Userreducer";
import { loginUserReducer } from "./reducers/Userreducer";
import { placeOrderReducer,getUserOrdersReducer,getAllOrdersReducer } from "./reducers/Orderreducers";
const finalReducer = combineReducers({
  getAllPizzasReducer: getAllPizzasReducer,
  getAllUsersReducer:getAllUsersReducer,
  CartReducer: CartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  placeOrderReducer:placeOrderReducer,
  getUserOrdersReducer:getUserOrdersReducer,
  addPizzaReducer:addPizzaReducer,
  getAllOrdersReducer:getAllOrdersReducer
});
const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;
const initialState = {
  CartReducer: {
    cartItems: cartItems,
  },
  loginUserReducer: {
    currentUser: currentUser,
  },
};
const composeEnhancers = composeWithDevTools({});
const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
