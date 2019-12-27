import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from 'actions';

const initialState = {
  countriesData: [],
  isFetchingData: false,
  isFetchingError: false
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_SUCCESS:
      return { countriesData: payload, isFetchingData: false };
    case FETCH_REQUEST:
      return { isFetchingData: true };
    case FETCH_FAILURE:
      return { isFetchingError: true, isFetchingData: false };
    default:
      return state;
  }
};

export default rootReducer;
