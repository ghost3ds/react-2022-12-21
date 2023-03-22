import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Cart from '../../components/Cart/Cart';
import Restaurant from '../../components/Restaurant/Restaurant';
import Tabs from '../../components/Tabs/Tabs';
import { loadRestaurants } from '../../store/modules/restaurant/actions';

export const RestaurantsPage = () => {
  const dispatch = useDispatch();
  const [activeRestaurantId, setActiveRestaurantId] = useState();

  useEffect(() => {
    dispatch(loadRestaurants());
  }, []);

  return (
    <div>
      <Tabs onTabClick={setActiveRestaurantId} activeId={activeRestaurantId} />
      {activeRestaurantId && <Restaurant restaurantId={activeRestaurantId} />}
      <Cart />
    </div>
  );
};
