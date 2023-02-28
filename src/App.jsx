import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Restaurant from './components/Restaurant/Restaurant';
import Tabs from './components/Tabs/Tabs';
import { Provider } from 'react-redux';
import { store } from './store';

const App = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState();

  return (
    <Provider store={store}>
      <div>
        <Tabs onTabClick={setActiveRestaurantId} activeId={activeRestaurantId} />
        {activeRestaurantId && <Restaurant restaurantId={activeRestaurantId} />}
        <Cart />
      </div>
    </Provider>
  );
};

export default App;
