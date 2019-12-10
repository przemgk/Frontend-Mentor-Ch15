import React, { Component } from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import { matchPath } from 'react-router-dom';
import { routes } from 'routes';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

class Details extends Component {
  state = {};

  componentDidMount() {
    const {
      location: { pathname }
    } = this.props;

    const {
      params: { id }
    } = matchPath(pathname, { path: routes.countries, exact: true });

    console.log(id);
  }

  render() {
    return (
      <DetailsTemplate
        url="https://restcountries.eu/data/col.svg"
        nativeName="Belgium"
        population="12,121,123"
        region="as"
        subRegion="West-Europe"
        capital="as"
        topLevelDomain="bl"
        currencies="euro"
        languages="English"
        borderCountries={[
          { name: 'France', url: 'fr' },
          { name: 'Germany', url: 'deu' },
          { name: 'Netherlands', url: 'nth' }
        ]}
      />
    );
  }
}

Details.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default withRouter(Details);
