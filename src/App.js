import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1);
  }
  const handleDecrement = () => {
    setCount(count - 1);
  }
  const handleReset = () => {
    setCount(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        Counter with "State Hook"
      </header>
        <p>You clicked {count} times.</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
