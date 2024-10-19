import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <div style={{ border: '2px solid red' }}>
      <h3>Counter:{count}</h3>
      <button onClick={incrementCount}>Add</button>
    </div>
  );
}
