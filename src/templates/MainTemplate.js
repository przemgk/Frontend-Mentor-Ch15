import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from 'theme/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { theme } from 'theme/mainTheme';
import { routes } from 'routes';
import { withRouter } from 'react-router';
import { matchPath } from 'react-router-dom';
import { PageContext, ThemeContext } from 'context';

class MainTemplate extends Component {
  state = {
    pageType: 'home',
    currentTheme: 'light'
  };

  componentDidMount() {
    this.setPageType();
  }

  componentDidUpdate(prevProps, prevState) {
    this.setPageType(prevState);
  }

  setPageType = (prevState = {}) => {
    const {
      location: { pathname }
    } = this.props;

    const match = matchPath(pathname, { path: routes.countries, exact: true });

    const currentPage = match ? 'details' : 'home';

    if (prevState.pageType !== currentPage) {
      this.setState({ pageType: currentPage });
    }
  };

  handleThemeToggle = () => {
    this.setState(prevState => ({
      currentTheme: prevState.currentTheme === 'light' ? 'dark' : 'light'
    }));
  };

  render() {
    const { children } = this.props;
    const { currentTheme, pageType } = this.state;

    return (
      <PageContext.Provider value={pageType}>
        <ThemeContext.Provider value={{ handleThemeToggle: this.handleThemeToggle }}>
          <Normalize />
          <ThemeProvider theme={theme(`${currentTheme}`)}>
            <GlobalStyles />
            {children}
          </ThemeProvider>
        </ThemeContext.Provider>
      </PageContext.Provider>
    );
  }
}

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.shape({ pathname: PropTypes.string.isRequired }).isRequired
};

export default withRouter(MainTemplate);
