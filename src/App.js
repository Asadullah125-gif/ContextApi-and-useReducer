import React, { useState } from "react";
import Countercontext from "./CounterContext";
import Parent from "./Parent";

function App() {
  let countState = useState(0); //[Count , setCount]
  return (
    <Countercontext.Provider value={countState}>
      <div>
        <Parent />
      </div>
    </Countercontext.Provider>
  );
}

export default App;
