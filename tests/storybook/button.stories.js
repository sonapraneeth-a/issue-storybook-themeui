import React from 'react';
import Button from '../../src/components/button';
import { storiesOf } from "@storybook/react";

export default { title: 'Button' };

storiesOf("Light Mode|Button", module)
  .add("Primary", () => {
    return (
      <Button type="primary">
        Primary Button
      </Button>
    )
  })
  .add("Secondary", () => {
    return (
      <Button type="secondary">
        Secondary Button
      </Button>
    )
  });
