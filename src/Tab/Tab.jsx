import React from 'react';
import Button from '../components/Button/Button';

const Tab = ({ name, onClick, isActive }) => {
  return (
    <Button onClick={onClick} disabled={isActive}>
      {name}
    </Button>
  );
};

export default Tab;