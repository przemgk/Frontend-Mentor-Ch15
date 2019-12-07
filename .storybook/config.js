import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import GlobalStyles from 'theme/GlobalStyles';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import styled from 'styled-components';

const StyledStorybookWrapper = styled.div`
  padding: 24px;
`;

addDecorator(story => (
  <StyledStorybookWrapper>
    <Normalize />
    <ThemeProvider theme={theme('light')}>
      <GlobalStyles />
      {story()}
    </ThemeProvider>
  </StyledStorybookWrapper>
));

// automatically import all files ending in *.stories.js
configure(require.context('../src/components/', true, /\.stories\.js$/), module);
