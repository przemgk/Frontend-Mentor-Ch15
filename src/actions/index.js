import axios from 'axios';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const TOGGLE_THEME = 'TOGGLE_THEME';

export const SET_PAGE_TYPE = 'SET_PAGE_TYPE';

export const fetchDataAction = dispatch => {
  dispatch({ type: FETCH_REQUEST });

  axios
    .get('https://restcountries.eu/rest/v2/all', {
      params: {
        fields:
          'name;capital;region;population;flag;subregion;nativeName;topLevelDomain;languages;currencies;borders;alpha3Code'
      }
    })
    .then(({ data }) => dispatch({ type: FETCH_SUCCESS, payload: data }))
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_FAILURE });
    });
};

export const toogleThemeAction = dispatch => dispatch({ type: TOGGLE_THEME });

export const setPageType = (dispatch, pageType) =>
  dispatch({ type: SET_PAGE_TYPE, payload: pageType });
