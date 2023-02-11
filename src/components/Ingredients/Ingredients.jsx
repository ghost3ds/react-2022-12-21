import React from 'react';
import Ingredient from '../Ingredient/Ingredient';

const Ingredients = ({ dish }) => {
  return (
    <div>
      <h3>Ingredients:</h3>
      <ul>
        {dish.ingredients.map((ingredient) => (
          <li>
            <Ingredient ingredient={ingredient} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ingredients;
