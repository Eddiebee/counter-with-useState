import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [action, setAction] = useState({
    isIncrement: false,
    isDecrement: false,
    isReset: true,
  });
  // const [isIncrement, setIsIncrement] = useState(false);

  const handleIncrement = () => {
    const isIncrement = true,
      isDecrement = false,
      isReset = false;
    setCount(count + 1);
    setAction({ isIncrement, isDecrement, isReset });
  };
  const handleDecrement = () => {
    const isIncrement = false,
      isDecrement = true,
      isReset = false;
    setCount(count - 1);
    setAction({ isIncrement, isDecrement, isReset });
  };
  const handleReset = () => {
    const isIncrement = false,
      isDecrement = false,
      isReset = true;
    setCount(0);
    setAction({ isIncrement, isDecrement, isReset });
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
      <button onClick={handleIncrement} id="increment">
        Increment
      </button>
      <button onClick={handleDecrement} id="decrement">
        Decrement
      </button>
      <button onClick={handleReset} id="reset">
        Reset
      </button>
    </div>
  );
}

export default App;
