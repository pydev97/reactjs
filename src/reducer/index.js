export const counterState = {
  counter: 0,
};

export const counterReducer = (state = counterState, action) => {
  switch (action.type) {
    case "increment":
      console.log("aaaaaaa", action.payload);
      return { ...state, counter: state.counter + action.payload };
    case "decrement":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};
export const incrementAction = { type: "increment" };
export const decrementAction = { type: "decrement" };
