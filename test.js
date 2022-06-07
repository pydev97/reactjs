class Store {
  constructor(state, reducer) {
    this.state = state;
    this.reducer = reducer;
  }
  // get state
  getState() {
    return this.state;
  }
  // dispatch
  dispatch(action) {
    if (typeof action === "function") {
      return action(this.dispatch, this.state);
    }
    this.state = this.reducer(this.state, action);
  }
  // subcribe
}
// create inital state
let initialState = 0;
// create reducer
function reducer(initialState, action) {
  if (action === "demo") {
    return initialState + 1;
  }
  return initialState;
}
const delayedActionMiddleware = (storeAPI) => (next) => (action) => {
  if (action.type === "demo") {
    setTimeout(() => {
      // Delay this action by one second
      next(action);
    }, 1000);
    return;
  }

  return next(action);
};
// create store
const store = new Store(initialState, reducer);
console.log("initalState", store.getState());
//dispatch a action
store.dispatch("demo");
//get state
console.log(store.getState());
