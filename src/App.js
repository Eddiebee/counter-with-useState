import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [action, setAction] = useState({});

  const handleAction = (e) => {
    const { name } = e.target;
    "isReset" === name
      ? setCount(0)
      : "isDecrement" === name
      ? setCount(count - 1)
      : setCount(count + 1);
    setAction({ [name]: true });
  };

  const { isIncrement, isDecrement } = action;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter with "State Hook"</h1>
      </header>
      <p
        style={
          isIncrement
            ? { color: "rgba(20, 202, 51, 0.945)" }
            : isDecrement
            ? { color: "rgba(202, 20, 20, 0.945)" }
            : { color: "rgba(20, 144, 202, 0.945)" }
        }
      >
        {count}
      </p>
      <button onClick={handleAction} id="increment" name="isIncrement">
        Increment
      </button>
      <button onClick={handleAction} id="decrement" name="isDecrement">
        Decrement
      </button>
      <button onClick={handleAction} id="reset" name="isReset">
        Reset
      </button>
    </div>
  );
}

export default App;
