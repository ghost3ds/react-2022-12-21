import React from 'react';
import { useSelector } from 'react-redux';
import { selectRestaurantMenuById } from '../../store/modules/restaurant/selectors';
import Dish from '../Dish/Dish';

const Menu = ({ restaurantId }) => {
  const dishIds = useSelector((state) =>
    selectRestaurantMenuById(state, { restaurantId }),
  );
  return (
    <div>
      <h2>Menu</h2>
      <ul>
        <h3>Dish:</h3>

        {dishIds.map((id) => (
          <li>
            <Dish dishId={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
