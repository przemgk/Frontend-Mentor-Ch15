import React from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { routes } from 'routes';

const Details = ({ countryData, isFetchingData, isFetchingError }) => {
  if (isFetchingData && !isFetchingError) {
    return <DetailsTemplate preloaderActive />;
  }

  if (isFetchingError) {
    return <Redirect to={routes.connectionFailed} />;
  }

  return (
    <DetailsTemplate
      flagUrl={countryData.flag}
      name={countryData.name}
      nativeName={countryData.nativeName}
      population={countryData.population}
      region={countryData.region}
      subRegion={countryData.subregion}
      capital={countryData.capital}
      topLevelDomain={countryData.topLevelDomain.join(', ')}
      currencies={countryData.currencies.map(({ name: currencyName }) => currencyName).join(', ')}
      languages={countryData.languages.map(({ name: languageName }) => languageName).join(', ')}
      borderCountries={countryData.borders}
    />
  );
};

Details.propTypes = {
  countryData: PropTypes.shape({
    flag: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    nativeName: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    population: PropTypes.number.isRequired,
    subregion: PropTypes.string.isRequired,
    capital: PropTypes.string.isRequired,
    topLevelDomain: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    currencies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    languages: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    borders: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string.isRequired, url: PropTypes.string.isRequired })
        .isRequired
    ).isRequired
  }),
  isFetchingData: PropTypes.bool.isRequired,
  isFetchingError: PropTypes.bool.isRequired
};

Details.defaultProps = {
  countryData: {
    flag: '',
    name: '',
    nativeName: '',
    region: '',
    population: 0,
    subregion: '',
    capital: '',
    topLevelDomain: [],
    currencies: [],
    languages: [],
    borders: []
  }
};

const mapStateToProps = ({ countriesData, isFetchingData, isFetchingError }, { match }) => {
  const currentCountry = match.params.id;

  const [countryData] = countriesData.filter(({ name }) => currentCountry === name.toLowerCase());

  return { countryData, isFetchingData, isFetchingError };
};

export default connect(mapStateToProps)(Details);
