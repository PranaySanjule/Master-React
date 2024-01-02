import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  // let counter = 15;

  const addValue = () => {
    // counter = counter + 1;
    setCounter(counter + 1);
    console.log("clicked", counter);
  };

  const removeValue = () => {
    setCounter(counter - 1);
    console.log("clicked", counter);
  };

  return (
    <>
      <h1>Chai Aur Code</h1>
      <h3>Counter Value: {counter}</h3>
      <button onClick={addValue}>Increase Counter</button>
      <button onClick={removeValue}>Decrease Counter</button>
      <br />
      <br />
      <footer>{counter}</footer>
    </>
  );
}

export default App;
