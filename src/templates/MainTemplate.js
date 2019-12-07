import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from 'theme/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { theme } from 'theme/mainTheme';
import { routes } from 'routes';
import { PageContext, ThemeContext } from 'context';
import { useLocation, matchPath } from 'react-router-dom';

const MainTemplate = ({ children }) => {
  const { pathname } = useLocation();
  const match = matchPath(pathname, { path: routes.countries, exact: true });

  const [currentTheme, handleThemeToggle] = useState('dark');

  return (
    <PageContext.Provider value={match ? 'details' : 'home'}>
      <ThemeContext.Provider value={{ currentTheme, handleThemeToggle }}>
        <Normalize />
        <ThemeProvider theme={theme(`${currentTheme}`)}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </ThemeContext.Provider>
    </PageContext.Provider>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired
};

export default MainTemplate;
