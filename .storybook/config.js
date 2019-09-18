import { configure, addDecorator } from '@storybook/react';
import React from 'react';
import { action } from "@storybook/addon-actions";
import { ThemeProvider } from 'theme-ui';
import index from "../src/gatsby-plugin-theme-ui/index.js";

// automatically import all files ending in *.stories.js
const req = require.context('../tests/storybook', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator((story) => (
  <ThemeProvider theme={index}>
    {story()}
  </ThemeProvider>
))

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = ""
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}

console.log(loadStories);
console.log(req);

configure(loadStories, module);
