import React from 'react';
import { useDispatch } from '../../customStore/hooks/useDispatch';
import { useSelector } from '../../customStore/hooks/useSelector';
import Button from '../Button/Button';
import Ingredients from '../Ingredients/Ingredients';

const Dish = ({ dish }) => {
  const count = useSelector((state) => state.cart[dish.name] || 0);
  const dispatch = useDispatch();
  const decrement = () => dispatch({ type: 'removeDish', payload: dish.name });
  const increment = () => dispatch({ type: 'addDish', payload: dish.name });
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
