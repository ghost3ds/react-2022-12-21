import React from 'react';
import { useState } from 'react';
import Button from '../Button/Button';

const Ingredient = ({ ingredient }) => {
  const [count, setCount] = useState(1);
  return (
    <div>
      {ingredient}
      <Button onClick={() => setCount(count - 1)} disabled={count === 1}>
        -
      </Button>
      {count}
      <Button onClick={() => setCount(count + 1)} disabled={count === 5}>
        +
      </Button>
    </div>
  );
};

export default Ingredient;
