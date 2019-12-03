import React from 'react';
import { PageContext } from 'context';

const withPageContext = Component => props => (
  <PageContext.Consumer>
    {value => <Component {...props} pageContext={value} />}
  </PageContext.Consumer>
);

export default withPageContext;
