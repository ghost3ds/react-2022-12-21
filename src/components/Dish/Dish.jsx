import { Button } from '../Button/Button';
import { Ingredients } from '../Ingredients/Ingredients';
import { useCount } from '../../hooks/useCount';
import classnames from 'classnames';

import styles from './styles.module.css';
import { useSelector } from '../../customStore/hooks/useSelector';
import { useDispatch } from '../../customStore/hooks/useDispatch';

const MAX_DISH_COUNT = 6;

export const Dish = ({ dish }) => {
  // const { count, increment, decrement } = useCount({
  //   max: MAX_DISH_COUNT,
  // });
  const count = useSelector((state) => state.cart[dish.name] || 0);
  const dispatch = useDispatch();
  const decrement = () => dispatch({ type: 'removeDish', payload: dish.name });
  const increment = () => dispatch({ type: 'addDish', payload: dish.name });

  if (!dish) {
    return null;
  }

  const { name, ingredients } = dish;

  return (
    <div
      className={classnames(styles.root, {
        [styles.rootBig]: count > 4,
      })}
    >
      {name}
      <div>
        <Button onClick={decrement}>-</Button>
        {count}
        <Button onClick={increment}>+</Button>
      </div>
      {count > 0 && ingredients?.length > 0 && (
        <Ingredients ingredients={ingredients} />
      )}
    </div>
  );
};
