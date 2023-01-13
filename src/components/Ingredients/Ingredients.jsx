import { Ingredient } from '../Ingredient/Ingredient';

export const Ingredients = ({ ingredients }) => {
  return (
    <div>
      {ingredients.map((ingredient) => (
        <ul>
          <li>
            <Ingredient name={ingredient} /> {console.log(ingredient)}
          </li>
        </ul>
      ))}
    </div>
  );
};
