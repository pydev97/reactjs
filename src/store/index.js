import { createStore, applyMiddleware } from "redux";
import { counterReducer } from "../reducer/index";
function log1(storeAPI) {
  return function wrapDispatch(next) {
    return function handleAction(action) {
      if (typeof action === "function") {
        return action(storeAPI.dispatch, storeAPI.getState);
      }
      return next(action);
    };
  };
}
const store = createStore(counterReducer, applyMiddleware(log1));

export default store;
