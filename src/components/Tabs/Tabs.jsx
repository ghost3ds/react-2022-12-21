import React from 'react';
import { useSelector } from 'react-redux';
import { selectRestaurantIds } from '../../store/modules/restaurant/selectors';
import Tab from '../Tab/Tab';

const Tabs = ({ onTabClick, activeId }) => {
  const restaurantIds = useSelector(selectRestaurantIds);
  return (
    <div>
      {restaurantIds.map((id) => (
        <Tab
          restaurantId={id}
          onClick={() => onTabClick(id)}
          isActive={id === activeId}
        />
      ))}
    </div>
  );
};

export default Tabs;
