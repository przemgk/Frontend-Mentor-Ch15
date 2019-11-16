import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import GlobalStyles from 'theme/GlobalStyles';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';

addDecorator(story => (
  <>
    <Normalize />
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {story()}
    </ThemeProvider>
  </>
));

// automatically import all files ending in *.stories.js
configure(require.context('../src/components/', true, /\.stories\.js$/), module);
