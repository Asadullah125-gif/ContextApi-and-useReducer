import React, { useReducer } from "react";
import CounterReducer from "./CounterReducer";

function Child2() {
    
  let [state, dispatch] = useReducer(CounterReducer, 0);
  return (
    <div>
      <h1>This is Counter Reducer</h1>
      <h3>Value of Reducer State is :{state} </h3>
      <button onClick={() => dispatch('INCREMENT')}>+</button>/
      <button onClick={() => dispatch('DECREMENT')}>-</button>
    </div>
  );
}
export default Child2;
