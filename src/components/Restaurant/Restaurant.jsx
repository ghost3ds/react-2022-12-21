import React from 'react';
import Button from '../Button/Button';
import Menu from '../Menu/Menu';
import Reviews from '../Reviews/Reviews';

const Restaurant = ({ name, menu, reviews }) => {
  return (
    <div>
      <h1>{name}</h1>
      <div>
        <Menu menu={menu} />
        <Reviews reviews={reviews} />
      </div>
    </div>
  );
};

export default Restaurant;
