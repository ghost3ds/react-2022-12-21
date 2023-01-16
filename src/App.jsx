import { restaurants } from './constants/fixtures';
import { Restaurant } from './components/Restaurant/Restaurant';
import React, { useState } from 'react';
import { Tabs } from './components/Tabs/Tabs';
import { Provider } from './customStore/components/Provider/Provider';
import { store } from './store';
import { Cart } from './components/Cart/Cart';

export const App = () => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);

  return (
    <Provider store={store}>
      <div>
        <Tabs
          onTabClick={setActiveRestaurantIndex}
          items={restaurants.map(({ name }) => name)}
          activeIndex={activeRestaurantIndex}
        />
        <Restaurant restaurant={restaurants[activeRestaurantIndex]} />
        <Cart />
      </div>
    </Provider>
  );
};
