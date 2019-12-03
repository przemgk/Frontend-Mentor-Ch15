import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'theme/GlobalStyles';
import { Normalize } from 'styled-normalize';
import { theme } from 'theme/mainTheme';
import { routes } from 'routes';
import { useLocation } from 'react-router-dom';
import { matchPath } from 'react-router';
import { PageContext } from 'context';

const MainTemplate = ({ children }) => {
  const { pathname } = useLocation();
  const match = matchPath(pathname, { path: routes.countries, exact: true });

  return (
    <PageContext.Provider value={match ? 'details' : 'home'}>
      <Normalize />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </PageContext.Provider>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired
};

export default MainTemplate;
