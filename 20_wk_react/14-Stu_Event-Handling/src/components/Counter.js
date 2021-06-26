import React, { useState } from 'react';
import CardBody from './CardBody';

// TODO: Add a comment explaining what export default does
// Exports following variable, function, object, etc as the main output from the export object: can be used as `import 'Counter' from './Counter'`
export default function Counter() {
  // TODO: Add a comment that explains how the useState hook works
  // Returns state value in first variable, and method to update component state in second variable
  const [count, setCount] = useState(0);

  // TODO: Explain what is happening with this click handler
  // Updates state with count value increased by 1
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // TODO: Explain what is happening with this click handler
  // Updates state with count value decreased by 1
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className='card text-center'>
      <div className='card-header bg-primary text-white'>Click Counter!</div>
      {/* TODO: Add a comment that explains what props are getting passed to CardBody */}
      {/* Count state and handler functions */}
      <CardBody
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
}
