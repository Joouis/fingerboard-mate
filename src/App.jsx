import React, { useState, useEffect } from 'react';
import { IntervalTester } from "./IntervalTester";

function App() {
  const [count, setCount] = useState(0);
  // TODO: allow to set refreshTime
  const [refreshTime] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), refreshTime * 1000);
    return () => clearTimeout(timer);
  }, [count, setCount, refreshTime]);
  // Return the App component.
  return (
    <div className="App">
      <IntervalTester />
    </div>
  );
}

export default App;