import React, { useContext, useEffect } from 'react';
import { StoreContext } from 'store';
import PropTypes from 'prop-types';
import GlobalStyles from 'theme/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { theme } from 'theme/mainTheme';
import { routes } from 'routes';
import { useRouteMatch } from 'react-router-dom';
import { setPageTypeAction, fetchDataAction } from 'actions';

const MainTemplate = ({ children }) => {
  const [state, dispatch] = useContext(StoreContext);
  const pageType = !useRouteMatch(routes.countries) ? 'home' : 'details';

  useEffect(() => {
    setPageTypeAction(dispatch, pageType);
  }, [dispatch, pageType]);

  useEffect(() => {
    fetchDataAction(dispatch);
  }, [dispatch]);

  return (
    <>
      <Normalize />
      <ThemeProvider theme={theme(`${state.currentTheme}`)}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired
};

export default MainTemplate;
