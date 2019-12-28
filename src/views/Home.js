import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListTemplate from 'templates/ListTemplate';
import Card from 'components/molecules/Card/Card';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { routes } from 'routes';

class Home extends Component {
  state = { searchQuery: '' };

  handleSearching = ({ target: { value } }) => this.setState({ searchQuery: value });

  render() {
    const { countriesData, isFetchingData, isFetchingError } = this.props;
    const { searchQuery } = this.state;

    const data = countriesData.filter(({ name }) => name.toLowerCase().includes(searchQuery));

    if (isFetchingData && !isFetchingError) {
      return <ListTemplate preloaderActive />;
    }

    if (isFetchingError) {
      return <Redirect to={routes.connectionFailed} />;
    }

    if (data.length === 0 && searchQuery !== '') {
      return (
        <ListTemplate
          handleSearching={this.handleSearching}
          noResults
          noResultsSearchQuery={searchQuery}
        />
      );
    }

    return (
      <ListTemplate handleSearching={this.handleSearching}>
        {data.map(({ name, population, region, capital, flag }) => (
          <Card
            key={name}
            title={name}
            desc={[
              { label: 'Population', value: population },
              { label: 'Region', value: region },
              { label: 'Capital', value: capital }
            ]}
            flagUrl={flag}
          />
        ))}
      </ListTemplate>
    );
  }
}

Home.propTypes = {
  countriesData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      population: PropTypes.number.isRequired,
      region: PropTypes.string.isRequired,
      capital: PropTypes.string.isRequired,
      flag: PropTypes.string.isRequired
    })
  ).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  isFetchingData: PropTypes.bool.isRequired,
  isFetchingError: PropTypes.bool.isRequired
};

const mapStateToProps = (
  { countriesData: countriesDataState, isFetchingData, isFetchingError },
  { match }
) => {
  const currentRegion = routes[match.path.slice(1)];

  const countriesData = countriesDataState
    .filter(({ region }) =>
      region.toLowerCase().includes(currentRegion ? currentRegion.slice(1) : '')
    )
    .map(({ name, region, flag, capital, population }) => ({
      name,
      region,
      flag,
      capital,
      population
    }));

  return {
    countriesData,
    isFetchingData,
    isFetchingError
  };
};

export default connect(mapStateToProps)(Home);
