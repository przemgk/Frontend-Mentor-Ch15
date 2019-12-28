import axios from 'axios';
import { generatePath } from 'react-router-dom';
import { routes } from 'routes';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchData = () => dispatch => {
  dispatch({ type: FETCH_REQUEST });

  return axios
    .get('https://restcountries.eu/rest/v2/all', {
      params: {
        fields:
          'name;capital;region;population;flag;subregion;nativeName;topLevelDomain;languages;currencies;borders;alpha3Code'
      }
    })
    .then(({ data }) => {
      const alpha3CodeToNames = {};

      data.forEach(({ alpha3Code, name }) => {
        alpha3CodeToNames[alpha3Code] = name;
      });

      const dataWithBoredersNames = data.map(country => {
        const borders = country.borders.map(border => {
          const name = alpha3CodeToNames[border];

          const url = generatePath(routes.countries, {
            id: encodeURI(name).toLowerCase()
          });

          return { name, url };
        });

        return { ...country, borders };
      });

      dispatch({ type: FETCH_SUCCESS, payload: dataWithBoredersNames });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_FAILURE });
    });
};
