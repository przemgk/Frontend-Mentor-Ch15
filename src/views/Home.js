import React, { Component } from 'react';
import ListTemplate from 'templates/ListTemplate';
import Card from 'components/molecules/Card/Card';
import axios from 'axios';

class Home extends Component {
  state = {
    data: []
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
          data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { data } = this.state;

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
}

export default Home;
