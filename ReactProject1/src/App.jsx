import { useState } from "react";
const App = () => {
  var [count, setCount] = useState(0);
  
  const increment = () => {
    count++;
    setCount(count);
  }
  const decrement = () => {
    count--;
    setCount(count);
  }


  return<>
    <h1>Counter App</h1>
    <h2>{count}</h2>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </>
}