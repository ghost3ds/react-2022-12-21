import React from 'react';
import { Tab } from '../Tab/Tab';

export const Tabs = ({ tabs, setActive, activeRestaurant }) => {
  return (
    <div>
      <h2>Tabs List</h2>
      {tabs.map((tab, i) => (
        <Tab
          name={tab.name}
          onClick={() => setActive(i)}
          isActive={i === activeRestaurant}
        />
      ))}
    </div>
  );
};
