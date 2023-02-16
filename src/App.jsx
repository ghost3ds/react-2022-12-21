import React, { useState } from 'react';
import Restaurant from './components/Restaurant/Restaurant';
import Tabs from './components/Tabs/Tabs';
import { restaurants } from './constants/fixtures';

const App = () => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);
  return (
    <div>
      <Tabs
        restaurants={restaurants}
        onTabClick={setActiveRestaurantIndex}
        activeIndex={activeRestaurantIndex}
      />
      <Restaurant restaurant={restaurants[activeRestaurantIndex]} />
    </div>
  );
};

export default App;
