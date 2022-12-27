import {React, useContext}from "react";
import Countercontext from "./CounterContext";

function Child() {
  let CounterValue = useContext(Countercontext)
  console.log(CounterValue)
  
  return (
    <>
      <div>
        <h1>This is  Counter Context</h1>
        <h3>Value of Context State is : {CounterValue[0]}</h3>
        <button onClick={() =>{CounterValue[1](++CounterValue[0])}}>Increament</button>
      </div>
    </>
  );
}

export default Child;
