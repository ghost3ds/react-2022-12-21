import React from 'react';
import { useCount } from '../../hooks/useCount';
import Button from '../Button/Button';

const Ingredient = ({ ingredient }) => {
  const { count, increment, decrement } = useCount(1);
  return (
    <div>
      {ingredient}
      <Button onClick={decrement} disabled={count === 1}>
        -
      </Button>
      {count}
      <Button onClick={increment} disabled={count === 5}>
        +
      </Button>
    </div>
  );
};

export default Ingredient;
