import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearDish } from '../../store/modules/cart/actions';
import { selectCart, selectCartDishIds } from '../../store/modules/cart/selectors';
import Dish from '../Dish/Dish';

const Cart = () => {
  const dishIds = useSelector(selectCartDishIds);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <h2>Cart:</h2>
        {dishIds.map((dishId) => (
          <Dish dishId={dishId} />
        ))}
        {dishIds.length > 0 ? (
          <button onClick={() => dispatch(clearDish())}>Clear</button>
        ) : (
          <i>Cart is empty</i>
        )}
      </div>
    </div>
  );
};

export default Cart;
