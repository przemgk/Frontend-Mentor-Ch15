import axios from 'axios';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchData = () => dispatch => {
  dispatch({ type: FETCH_REQUEST });

  return axios
    .get('https://restcountries.eu/rest/v2/all', {
      params: {
        fields:
          'name;capital;region;population;flag;subregion;nativeName;topLevelDomain;languages;currencies;borders'
      }
    })
    .then(({ data }) => {
      dispatch({ type: FETCH_SUCCESS, payload: data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_FAILURE });
    });
};