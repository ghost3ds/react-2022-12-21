import React from 'react';
import ReactDOM from 'react-dom/client';
import Restaurant from './components/Restaurant/Restaurant';

import { restaurants } from './constants/fixtures';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const restaurant = restaurants[0];

root.render(
  <div>
    {restaurants.map(({ name, menu, reviews }) => (
      <Restaurant name={name} menu={menu} reviews={reviews} />
    ))}
  </div>,
);
