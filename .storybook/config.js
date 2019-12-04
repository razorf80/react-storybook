import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import {ThemeProvider} from 'styled-components';
import {theme} from '../src/theme/theme';
import {withInfo} from "@storybook/addon-info";



addDecorator((story) => (
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>
))

configure(require.context('../src/components', true, /\.stories\.js$/), module);
