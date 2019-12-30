import React, { useContext } from 'react';
import { StoreContext } from 'store';

/* 
  I must create this HOC to pass pageType from global store 
  into components created only with styled-components because
  I can't use there useContext hook without rebuild them
  to functional component what I didn't want to do
*/

const withPageType = Component => props => {
  const [{ pageType }] = useContext(StoreContext);

  return <Component {...props} pageType={pageType} />;
};

export default withPageType;
