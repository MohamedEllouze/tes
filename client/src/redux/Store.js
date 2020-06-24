import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunkMiddlewar from "redux-thunk";

const middleware = [thunkMiddlewar];
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const enhancer = composeEnhancers(applyMiddleware(...middleware));
const firstReducer = (state = "initiale state", action) => {
  return state;
};
const Store = createStore(
  combineReducers({
    firstReducer,
  }),
  enhancer
);
export default Store;
