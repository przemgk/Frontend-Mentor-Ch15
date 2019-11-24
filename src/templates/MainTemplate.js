import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'theme/GlobalStyles';
import { Normalize } from 'styled-normalize';
import { theme } from 'theme/mainTheme';

const MainTemplate = ({ children }) => (
  <>
    <Normalize />
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  </>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired
};

export default MainTemplate;
