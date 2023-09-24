import React from 'react';
import { render } from 'react-dom';

const Counter = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

render(<Counter />, document.getElementById('root'));

