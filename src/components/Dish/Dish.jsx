import React from 'react';
import { useCount } from '../../hooks/useCount';
import Button from '../Button/Button';
import Ingredients from '../Ingredients/Ingredients';

const Dish = ({ dish }) => {
  const { count, increment, decrement } = useCount();
  return (
    <div>
      <Button onClick={decrement} disabled={count === 0}>
        -
      </Button>
      {count}
      <Button onClick={increment} disabled={count === 5}>
        +
      </Button>
      {`${dish.name}, ${dish.price} USD`}
      {count > 0 && dish.ingredients?.length > 0 ? <Ingredients dish={dish} /> : ''}
    </div>
  );
};

export default Dish;
