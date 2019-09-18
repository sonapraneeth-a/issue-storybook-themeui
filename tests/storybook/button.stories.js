import React from 'react';
import { useColorMode, ThemeProvider } from 'theme-ui';
import index from "../../src/gatsby-plugin-theme-ui/index.js";

import Button from '../../src/components/button';

export default { 
  title: 'Light theme | Button' ,
  component: Button,
  decorators: [
    story => (
      <ThemeProvider theme={index}>
        {story()}
      </ThemeProvider>
    ),
  ],
};

export const Primary = () => {
  const [colorMode, setColorMode] = useColorMode();
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
