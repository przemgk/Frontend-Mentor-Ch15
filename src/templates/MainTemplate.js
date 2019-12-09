import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from 'theme/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { theme } from 'theme/mainTheme';
import { routes } from 'routes';
import { withRouter } from 'react-router';
import { matchPath } from 'react-router-dom';
import { PageContext, ThemeContext, DataContext } from 'context';
import axios from 'axios';

class MainTemplate extends Component {
  state = {
    pageType: 'home',
    currentTheme: 'light',
    data: []
  };

  componentDidMount() {
    this.setPageType();

    axios
      .get('https://restcountries.eu/rest/v2/all', {
        params: {
          fields:
            'name;topLevelDomain;capital;region;subregion;population;languages;currencies;nativeName;borders;alpha3Code;flag'
        }
      })
      .then(({ data }) => {
        this.setState({ data });
      })
      .catch(err => console.log(err));
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
    const { currentTheme, pageType, data } = this.state;

    return (
      <PageContext.Provider value={pageType}>
        <ThemeContext.Provider value={{ handleThemeToggle: this.handleThemeToggle }}>
          <DataContext.Provider value={data}>
            <Normalize />
            <ThemeProvider theme={theme(`${currentTheme}`)}>
              <GlobalStyles />
              {children}
            </ThemeProvider>
          </DataContext.Provider>
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
