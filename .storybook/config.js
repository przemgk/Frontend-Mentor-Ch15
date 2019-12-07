import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import GlobalStyles from 'theme/GlobalStyles';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import { withKnobs, select } from '@storybook/addon-knobs';
import styled from 'styled-components';

const StyledStorybookWrapper = styled.div`
  padding: 24px;
`;

addDecorator(withKnobs);

addDecorator(story => {
  const labelTheme = 'Theme';
  const optionsTheme = {
    light: 'light',
    dark: 'dark'
  };
  const defaultValueTheme = 'light';
  const groupIdTheme = 'Theme';

  const valueTheme = select(labelTheme, optionsTheme, defaultValueTheme, groupIdTheme);

  const { icons } = theme(`${valueTheme}`);

  return (
    <StyledStorybookWrapper>
      <Normalize />
      <ThemeProvider theme={theme(`${valueTheme}`)}>
        <GlobalStyles />
        {story({ icons, valueTheme })}
      </ThemeProvider>
    </StyledStorybookWrapper>
  );
});

// automatically import all files ending in *.stories.js
configure(require.context('../src/components/', true, /\.stories\.js$/), module);
