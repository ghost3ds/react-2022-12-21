import React from 'react';
import { useState } from 'react';
import Button from '../Button/Button';
import Ingredients from '../Ingredients/Ingredients';

const Dish = ({ dish }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Button onClick={() => setCount(count - 1)} disabled={count === 0}>
        -
      </Button>
      {count}
      <Button onClick={() => setCount(count + 1)} disabled={count === 5}>
        +
      </Button>
      {`${dish.name}, ${dish.price} USD`}
      {count > 0 && dish.ingredients?.length > 0 ? <Ingredients dish={dish} /> : ''}
    </div>
  );
};

export default Dish;
