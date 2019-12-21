import React, { Component } from 'react';
import ListTemplate from 'templates/ListTemplate';
import Card from 'components/molecules/Card/Card';
import Preloader from 'components/molecules/Preloader/Preloader';
import axios from 'axios';
import { withRouter } from 'react-router';
import { routes } from 'routes';
import PropTypes from 'prop-types';

class Home extends Component {
  state = {
    data: [],
    isLoading: true,
    currentRegion: ''
  };

  componentDidMount() {
    this.getDataFromAPI();
  }

  componentDidUpdate() {
    this.getDataFromAPI();
  }

  getDataFromAPI = () => {
    const {
      location: { pathname }
    } = this.props;

    const { data, currentRegion, isLoading } = this.state;

    const region = routes[pathname.slice(1)];

    if (region && region !== currentRegion) {
      if (isLoading === false) {
        this.setState({ isLoading: true });
      }

      axios
        .get(`https://restcountries.eu/rest/v2/region/${region.slice(1)}`, {
          params: {
            fields: 'name;capital;region;population;flag'
          }
        })
        .then(({ data: countryData }) => {
          this.setState({
            data: countryData,
            currentRegion: region,
            isLoading: false
          });
        })
        .catch(err => console.log(err));
    } else if (data.length === 0) {
      axios
        .get('https://restcountries.eu/rest/v2/all', {
          params: {
            fields: 'name;capital;region;population;flag'
          }
        })
        .then(({ data: countryData }) => {
          this.setState({
            data: countryData,
            isLoading: false
          });
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    const { data, isLoading } = this.state;

    if (!isLoading) {
      return (
        <ListTemplate>
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

    return (
      <ListTemplate>
        <Preloader />
      </ListTemplate>
    );
  }
}

Home.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default withRouter(Home);
