import React, { useContext, useState, useEffect } from 'react';
import { StoreContext } from 'store';
import DetailsTemplate from 'templates/DetailsTemplate';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { routes } from 'routes';

const Details = ({ match }) => {
  const [{ isFetchingData, isFetchingError, countriesData }] = useContext(StoreContext);
  const [isReady, changeReadyState] = useState(false);

  useEffect(() => {
    changeReadyState(true);
  }, []);

  if (isFetchingError) {
    return <Redirect to={routes.connectionFailed} />;
  }

  if (!isFetchingData && isReady) {
    const [data] = countriesData.filter(
      ({ name }) => name.toLowerCase() === decodeURI(match.params.id)
    );

    if (!data) {
      return <Redirect to="/404" />;
    }

    return (
      <DetailsTemplate
        flagUrl={data.flag}
        name={data.name}
        nativeName={data.nativeName}
        population={data.population}
        region={data.region}
        subRegion={data.subregion}
        capital={data.capital}
        topLevelDomain={data.topLevelDomain.join(', ')}
        currencies={data.currencies.map(({ name: currencyName }) => currencyName).join(', ')}
        languages={data.languages.map(({ name: languageName }) => languageName).join(', ')}
        borderCountries={data.borders}
      />
    );
  }

  return <DetailsTemplate preloaderActive />;
};

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired
  }).isRequired
};

export default Details;
