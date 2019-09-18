import { configure } from '@storybook/react';

configure(
  require.context('../tests/storybook', true, /\.stories\.js$/), 
  module
);
