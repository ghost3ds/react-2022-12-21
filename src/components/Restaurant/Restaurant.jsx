import React from 'react';
import Menu from '../Menu/Menu';
import Reviews from '../Reviews/Reviews';

const Restaurant = ({ restaurant }) => {
  return (
    <div>
      <h1>{restaurant.name}</h1>
      <div>
        <Menu menu={restaurant.menu} />
        <Reviews reviews={restaurant.reviews} />
      </div>
    </div>
  );
};

export default Restaurant;
