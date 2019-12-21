import React, { Component } from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import { matchPath, generatePath } from 'react-router-dom';
import { routes } from 'routes';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import axios from 'axios';

class Details extends Component {
  state = {
    data: {},
    borderCountries: [],
    currentCountry: '',
    isLoading: true,
    canGetBorderCountriesNames: false
  };

  componentDidMount() {
    this.getCountryData();
  }

  componentDidUpdate() {
    const { currentCountry, canGetBorderCountriesNames } = this.state;

    if (currentCountry !== this.getCurrentCountry()) {
      this.getCountryData();
    }

    if (canGetBorderCountriesNames) {
      this.getBorderCountriesNames();
    }
  }

  getCurrentCountry = () => {
    const {
      location: { pathname }
    } = this.props;

    const {
      params: { id }
    } = matchPath(pathname, { path: routes.countries, exact: true });

    return decodeURI(id);
  };

  getCountryData = () => {
    const { isLoading } = this.state;
    const currentCountry = this.getCurrentCountry();

    if (!isLoading) {
      this.setState({ isLoading: true });
    }

    axios
      .get(`https://restcountries.eu/rest/v2/name/${currentCountry}`, {
        params: {
          fullText: true,
          fields:
            'name;capital;region;population;flag;subregion;nativeName;topLevelDomain;languages;currencies;borders'
        }
      })
      .then(({ data: [countryData] }) =>
        this.setState({
          data: countryData,
          currentCountry,
          canGetBorderCountriesNames: true
        })
      )
      .catch(err => console.log(err));
  };

  getBorderCountriesNames = () => {
    const {
      data: { borders }
    } = this.state;

    const borderCountries = [];

    if (borders.length === 0) {
      this.setState({ isLoading: false, canGetBorderCountriesNames: false });
    }

    borders.map(item =>
      axios
        .get(`https://restcountries.eu/rest/v2/alpha/${item.toLowerCase()}`, {
          params: { fields: 'name' }
        })
        .then(({ data: { name: borderCountryName } }) => {
          const path = generatePath(routes.countries, {
            id: encodeURI(borderCountryName).toLowerCase()
          });

          borderCountries.push({ name: borderCountryName, url: path });

          if (borders.length === borderCountries.length) {
            this.setState({
              borderCountries,
              isLoading: false,
              canGetBorderCountriesNames: false
            });
          }
        })
        .catch(err => console.log(err))
    );
  };

  render() {
    const { data, borderCountries, isLoading } = this.state;

    if (!isLoading) {
      const {
        flag,
        name,
        population,
        region,
        capital,
        subregion,
        nativeName,
        topLevelDomain,
        languages,
        currencies
      } = data;

      return (
        <DetailsTemplate
          flagUrl={flag}
          name={name}
          nativeName={nativeName}
          population={population}
          region={region}
          subRegion={subregion}
          capital={capital}
          topLevelDomain={topLevelDomain.join(', ')}
          currencies={currencies.map(({ name: currencyName }) => currencyName).join(', ')}
          languages={languages.map(({ name: languageName }) => languageName).join(', ')}
          borderCountries={borderCountries.map(item => item)}
        />
      );
    }

    return <DetailsTemplate preloaderActive />;
  }
}

Details.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default withRouter(Details);
