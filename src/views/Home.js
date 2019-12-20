import React, { Component } from 'react';
import ListTemplate from 'templates/ListTemplate';
import Card from 'components/molecules/Card/Card';
import axios from 'axios';

class Home extends Component {
  state = {
    data: [],
    isLoading: true
  };

  componentDidMount() {
    axios
      .get('https://restcountries.eu/rest/v2/all', {
        params: {
          fields: 'name;capital;region;population;flag'
        }
      })
      .then(({ data }) => {
        this.setState({
          data,
          isLoading: false
        });
      })
      .catch(err => console.log(err));
  }

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
        <div>Loading</div>
      </ListTemplate>
    );
  }
}

export default Home;
