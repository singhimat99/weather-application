import React, { useState } from "react";

export default function Counter({ initialCount }) {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prev) => prev + 1);
  }
  function decrement() {
    setCount((prev) => prev - 1);
  }
  function restart() {
    setCount(0);
  }
  function switchSigns() {
    setCount((prev) => prev * -1);
  }

  return (
    <>
      <div>
        Count: <h3 data-testid="count">{count}</h3>
      </div>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={restart}>Restart</button>
        <button onClick={switchSigns}>Switch Sign</button>
      </div>
    </>
  );
}
