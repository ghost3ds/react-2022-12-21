import React, { useState } from 'react';
import Restaurant from './components/Restaurant/Restaurant';
import { restaurants } from './constants/fixtures';
import Tabs from './Tabs/Tabs';

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
