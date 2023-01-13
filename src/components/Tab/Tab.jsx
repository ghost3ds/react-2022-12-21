import React from 'react';
import { Button } from '../Button/Button';

export const Tab = ({ name, onClick, isActive }) => {
  return (
    <div>
      <Button onClick={onClick} disabled={isActive}>
        {name}
      </Button>
    </div>
  );
};
