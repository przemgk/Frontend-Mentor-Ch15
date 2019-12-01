import React from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';

const Details = () => (
  <DetailsTemplate
    url="https://restcountries.eu/data/col.svg"
    nativeName="Belgium"
    population="12,121,123"
    region="Europe"
    subRegion="West-Europe"
    capital="Brukselia"
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

export default Details;
