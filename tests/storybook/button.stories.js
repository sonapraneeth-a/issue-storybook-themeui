import React from 'react';
import { useColorMode } from "theme-ui";
import Button from '../../src/components/button';
import { storiesOf } from "@storybook/react";

export default { title: 'Button' };

storiesOf("Button", module).add("PrimaryButton", () => {
  return (
    <Button type="primary">
      Primary Button
    </Button>
  )
});

/* export const PrimaryButton = () => (
  <Button type="primary">
    Primary Button
  </Button>
);

export const SecondaryButton = () => (
  <Button type="secondary">
    Secondary Button
  </Button>
);*/  
