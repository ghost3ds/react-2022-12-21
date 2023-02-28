import React from 'react';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../store/modules/restaurant/selectors';
import Button from '../Button/Button';

const Tab = ({ restaurantId, onClick, isActive }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, { restaurantId }),
  );
  return (
    <Button onClick={onClick} disabled={isActive}>
      {restaurant.name}
    </Button>
  );
};

export default Tab;
