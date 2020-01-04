import React, { useContext, useState, useEffect } from 'react';
import ListTemplate from 'templates/ListTemplate';
import Card from 'components/molecules/Card/Card';
import { routes } from 'routes';
import { StoreContext } from 'store';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const Home = ({ match: { path } }) => {
  const [{ isFetchingData, isFetchingError, countriesData }] = useContext(StoreContext);
  const [isReady, changeReadyState] = useState(false);
  const [serachQuery, handleSearching] = useState('');
  const [currentRegion, setCurrentRegion] = useState('');

  useEffect(() => changeReadyState(true), []);

  useEffect(() => {
    const matchRegion = routes[path.slice(1)];

    setCurrentRegion(matchRegion ? matchRegion.slice(1) : '');
  }, [path]);

  if (isFetchingError) {
    return <Redirect to={routes.connectionFailed} />;
  }

  if (!isFetchingData && isReady) {
    const computeData = countriesData
      .filter(({ region }) => region.toLowerCase().includes(currentRegion))
      .filter(({ name }) => name.toLowerCase().includes(serachQuery.toLowerCase()));

    return computeData.length ? (
      <ListTemplate handleSearching={handleSearching}>
        {computeData.map(({ name, population, region, capital, flag }) => (
          <Card
            key={name}
            name={name}
            desc={[
              { label: 'Population', value: population },
              { label: 'Region', value: region },
              { label: 'Capital', value: capital }
            ]}
            flagUrl={flag}
          />
        ))}
      </ListTemplate>
    ) : (
      <ListTemplate
        handleSearching={handleSearching}
        noResults
        noResultsSearchQuery={serachQuery}
      />
    );
  }

  return <ListTemplate preloaderActive />;
};

Home.propTypes = {
  match: PropTypes.shape({ path: PropTypes.string.isRequired }).isRequired
};

export default Home;
