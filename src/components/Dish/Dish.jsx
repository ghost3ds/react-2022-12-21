import React from 'react';
import Button from '../Button/Button';

const Dish = ({ name, price }) => {
  return (
    <div>
      <Button>-</Button>
      <Button>+</Button>
      {`${name}, ${price} USD`}
    </div>
  );
};

export default Dish;
