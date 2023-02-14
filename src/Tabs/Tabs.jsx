import React from 'react';
import Tab from '../Tab/Tab';

const Tabs = ({ restaurants, onTabClick, activeIndex }) => {
  return (
    <div>
      {restaurants.map(({ name }, index) => (
        <Tab name={name} onClick={() => onTabClick(index)} isActive={index === activeIndex} />
      ))}
    </div>
  );
};

export default Tabs;
