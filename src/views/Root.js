import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Home from 'views/Home';
import Details from 'views/Details';

const Root = () => (
  <MainTemplate>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:id" component={Details} />
      </Switch>
    </BrowserRouter>
  </MainTemplate>
);

export default Root;
