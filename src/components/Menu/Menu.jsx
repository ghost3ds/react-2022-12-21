import React from 'react';
import Dish from '../Dish/Dish';

const Menu = ({ menu }) => {
  return (
    <div>
      <h2>Menu</h2>
      <ul>
        <h3>Dish:</h3>

        {menu.map((dish) => (
          <li>
            <Dish name={dish.name} price={dish.price} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
