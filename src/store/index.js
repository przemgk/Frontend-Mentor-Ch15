import React, { createContext, useReducer } from 'react';
import rootReducer from 'reducers';
import PropTypes from 'prop-types';

const initialState = {
  countriesData: [],
  isFetchingData: null,
  isFetchingError: null,
  pageType: 'home',
  currentTheme: 'light'
};

export const StoreContext = createContext(initialState);

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  return <StoreContext.Provider value={[state, dispatch]}>{children}</StoreContext.Provider>;
};

Store.propTypes = {
  children: PropTypes.node.isRequired
};

export default Store;
