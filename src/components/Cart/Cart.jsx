import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearDish } from '../../store/modules/actions';
import { selectCart } from '../../store/modules/selectors';

const Cart = () => {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
  const cartEntries = Object.entries(cart);
  return (
    <div>
      <div>
        {cartEntries.map(([name, count]) => (
          <div>
            {name} : {count}
          </div>
        ))}
        {cartEntries.length > 0 ? (
          <button onClick={() => dispatch(clearDish())}>Clear</button>
        ) : (
          <i>Cart is empty</i>
        )}
      </div>
    </div>
  );
};

export default Cart;
