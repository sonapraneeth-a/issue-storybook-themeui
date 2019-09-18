import React from 'react';
import Button from '../../src/components/button';

export default { 
  title: 'Light theme | Button' ,
  component: Button,
};

export const Primary = () => {
  return (
    <Button type="primary">
      Primary Button
    </Button>
  )
};
export const Secondary = () => {
  return (
    <Button type="secondary">
      Secondary Button
    </Button>
  )
};
