import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE, TOGGLE_THEME, SET_PAGE_TYPE } from 'actions';

const rootReducer = (state, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, isFetchingData: true };
    case FETCH_SUCCESS:
      return { ...state, countriesData: action.payload, isFetchingData: false };
    case FETCH_FAILURE:
      return { ...state, isFetchingError: true };
    case TOGGLE_THEME:
      return { ...state, currentTheme: state.currentTheme === 'light' ? 'dark' : 'light' };
    case SET_PAGE_TYPE:
      return { ...state, pageType: action.payload };
    default:
      throw new Error('Not found action');
  }
};

export default rootReducer;
