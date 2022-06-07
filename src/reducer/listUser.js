export const users = [];

export const usersReducer = (state = users, action) => {
  switch (action.type) {
    case "add":
      return { ...state, counter: state.counter + action.payload };
    case "edit":
      return { ...state, counter: state.counter - 1 };
    case "delete":
      return { ...state, counter: state.counter - 1 };
    case "getAllUsers":
      return [...state, ...action.payload];
    default:
      return state;
  }
};
export const incrementAction = { type: "increment" };
export const decrementAction = { type: "decrement" };
