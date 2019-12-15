import React from 'react';
import { ThemeContext } from 'context';

const withThemeContext = Component => props => (
  <ThemeContext.Consumer>
    {value => <Component {...props} themeContext={value} />}
  </ThemeContext.Consumer>
);

export default withThemeContext;
