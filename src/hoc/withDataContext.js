import React from 'react';
import { DataContext } from 'context';

const withDataContext = Component => props => (
  <DataContext.Consumer>
    {value => <Component {...props} dataContext={value} />}
  </DataContext.Consumer>
);

export default withDataContext;
