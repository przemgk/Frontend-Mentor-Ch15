import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'theme/GlobalStyles';
import { Normalize } from 'styled-normalize';
import { theme } from 'theme/mainTheme';

const Root = () => (
  <>
    <Normalize />
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <h1>Hello world</h1>
    </ThemeProvider>
  </>
);

export default Root;
