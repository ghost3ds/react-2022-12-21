import React from 'react';

import { Provider } from 'react-redux';
import { RestaurantsPage } from './pages/Restaurants/RestaurantsPage';
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <RestaurantsPage />
    </Provider>
  );
};

export default App;
