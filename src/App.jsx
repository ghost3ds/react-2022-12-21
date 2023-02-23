import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Restaurant from './components/Restaurant/Restaurant';
import Tabs from './components/Tabs/Tabs';
import { restaurants } from './constants/fixtures';
import { Provider } from './customStore/components/Provider/Provider';
import { store } from './store';

const App = () => {
  const [activeRestaurantIndex, setActiveRestaurantIndex] = useState(0);
  return (
    <Provider store={store}>
      <div>
        <Tabs
          restaurants={restaurants}
          onTabClick={setActiveRestaurantIndex}
          activeIndex={activeRestaurantIndex}
        />
        <Restaurant restaurant={restaurants[activeRestaurantIndex]} />
        <Cart />
      </div>
    </Provider>
  );
};

export default App;
