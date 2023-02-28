import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDish, removeDish } from '../../store/modules/actions';
import { selectDishCountByName } from '../../store/modules/selectors';
import Button from '../Button/Button';
import Ingredients from '../Ingredients/Ingredients';

const Dish = ({ dish }) => {
  const count = useSelector((state) =>
    selectDishCountByName(state, { dishName: dish.name }),
  );
  const dispatch = useDispatch();
  const decrement = () => dispatch(removeDish(dish.name));
  const increment = () => dispatch(addDish(dish.name));
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
