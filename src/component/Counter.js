import React, { useState } from "react";
import store from "../store/index";
export default function Counter(props) {
  const [counter, setCounter] = useState(0);
  const asyncCounter = (time) => {
    const time1 = time;
    return (dispatch, getState) => {
      console.log("asyncCounter", time);
      store.dispatch({ type: "increment", payload: time });
    };
  };
  return (
    <>
      <p> Counter is : {counter}</p>
      <button
        onClick={() => {
          console.log("fuckkkkk");
          // dispatch a action to the store
          store.dispatch(asyncCounter(2));
          const state = store.getState();
          setCounter(state.counter);
          //   store.dispatch({ type: "increment", payload: 1 });
          //   const state = store.getState();
          //   setCounter(state.counter);
        }}
      >
        Inscrease
      </button>
      <button
        onClick={() => {
          store.dispatch({ type: "decrement" });
          const state = store.getState();
          setCounter(state.counter);
        }}
      >
        Descrease
      </button>
    </>
  );
}
