import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDish, removeDish } from '../../store/modules/cart/actions';
import { selectDishCountByName } from '../../store/modules/cart/selectors';
import { selectDishById } from '../../store/modules/dish/selectors';
import Button from '../Button/Button';
import Ingredients from '../Ingredients/Ingredients';

const Dish = ({ dishId }) => {
  const dish = useSelector((state) => selectDishById(state, { dishId }));
  const count = useSelector((state) => selectDishCountByName(state, { dishId }));
  const dispatch = useDispatch();

  if (!dish) {
    return null;
  }

  const decrement = () => dispatch(removeDish(dishId));
  const increment = () => dispatch(addDish(dishId));
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
      {/* {count > 0 && dish.ingredients?.length > 0 ? <Ingredients dish={dish} /> : ''} */}
    </div>
  );
};

export default Dish;
