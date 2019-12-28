import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from 'actions';

const initialState = {
  countriesData: [],
  isFetchingData: false,
  isFetchingError: false
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_REQUEST:
      return { ...state, isFetchingData: true };
    case FETCH_SUCCESS:
      return { ...state, countriesData: payload, isFetchingData: false };
    case FETCH_FAILURE:
      return { ...state, isFetchingError: true };
    default:
      return state;
  }
};

export default rootReducer;
