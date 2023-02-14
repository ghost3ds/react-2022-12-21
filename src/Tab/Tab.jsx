import React from 'react';
import Button from '../components/Button/Button';

const Tab = ({ name, onClick, isActive }) => {
  return (
    <div>
      <Button onClick={onClick} disabled={isActive}>
        {name}
      </Button>
    </div>
  );
};

export default Tab;
