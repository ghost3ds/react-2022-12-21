import { restaurants } from './constants/fixtures';
import { Restaurant } from './components/Restaurant/Restaurant';
import React, { useState } from 'react';
import { Tabs } from './components/Tabs/Tabs';

export const App = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(0);

  return (
    <div>
      <Tabs
        tabs={restaurants}
        setActive={setActiveRestaurantId}
        activeRestaurant={activeRestaurantId}
      />
      <Restaurant restaurant={restaurants[activeRestaurantId]} />
    </div>
  );
};
