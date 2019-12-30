import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from 'routes';
import MainTemplate from 'templates/MainTemplate';
import Home from 'views/Home';
import Details from 'views/Details';
import NotFound404 from 'views/NotFound404';
import ConnectionFailed from 'views/ConnectionFailed';
import Store from 'store';

const Root = () => (
  <Store>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route exact path={routes.africa} component={Home} />
          <Route exact path={routes.americas} component={Home} />
          <Route exact path={routes.asia} component={Home} />
          <Route exact path={routes.europe} component={Home} />
          <Route exact path={routes.oceania} component={Home} />
          <Route exact path={routes.countries} component={Details} />
          <Route exact path={routes.ConnectionFailed} component={ConnectionFailed} />
          <Route exact path="*" component={NotFound404} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Store>
);

export default Root;
