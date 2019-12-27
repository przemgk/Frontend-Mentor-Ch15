import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListTemplate from 'templates/ListTemplate';
import Card from 'components/molecules/Card/Card';
import PropTypes from 'prop-types';
import { withRouter, Redirect } from 'react-router';
import { routes } from 'routes';

class Home extends Component {
  state = { currentRegion: '', searchQuery: '' };

  componentDidMount() {
    this.getCurrentRegion();
  }

  componentDidUpdate() {
    this.getCurrentRegion();
  }

  getCurrentRegion = () => {
    const {
      location: { pathname }
    } = this.props;

    const { currentRegion } = this.state;

    const region = routes[pathname.slice(1)] ? routes[pathname.slice(1)].slice(1) : '';

    if (currentRegion !== region) {
      this.setState({ currentRegion: region });
    }
  };

  handleSearching = ({ target: { value } }) => this.setState({ searchQuery: value });

  render() {
    const { countriesData, isFetchingData, isFetchingError } = this.props;
    const { currentRegion, searchQuery } = this.state;

    const data = countriesData
      .filter(({ region }) => region.toLowerCase().includes(currentRegion))
      .filter(({ name }) => name.toLowerCase().includes(searchQuery));

    if (isFetchingData) {
      return <ListTemplate preloaderActive />;
    }

    if (isFetchingError) {
      return <Redirect to={routes.connectionFailed} />;
    }

    if (data.length === 0) {
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
  ),
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  isFetchingData: PropTypes.bool,
  isFetchingError: PropTypes.bool
};

Home.defaultProps = { countriesData: [], isFetchingData: false, isFetchingError: false };

const mapStateToProps = ({ countriesData, isFetchingData, isFetchingError }) => ({
  countriesData,
  isFetchingData,
  isFetchingError
});

export default connect(mapStateToProps)(withRouter(Home));
