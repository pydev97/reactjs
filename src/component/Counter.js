import React from "react";
import { connect } from "react-redux";

export function Counter(props) {
  return (
    <>
      <p> Counter is : {props.counter}</p>
      <button
        onClick={() => {
          props.increment(2);
        }}
      >
        Inscrease
      </button>
      <button
        onClick={() => {
          props.decrement();
        }}
      >
        Descrease
      </button>
    </>
  );
}
function mapStateToProps(state) {
  const counter = state.counter;
  return { counter };
}
const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    increment: (time) => dispatch({ type: "increment", payload: time }),
    decrement: () => dispatch({ type: "decrement" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
