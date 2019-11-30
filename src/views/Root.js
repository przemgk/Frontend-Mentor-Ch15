import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Home from 'views/Home';
import Details from 'views/Details';
import NotFound404 from 'views/NotFound404';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/africa" component={Home} />
        <Route exact path="/america" component={Home} />
        <Route exact path="/asia" component={Home} />
        <Route exact path="/europe" component={Home} />
        <Route exact path="/oceania" component={Home} />
        <Route exact path="/countries/:id" component={Details} />
        <Route exact path="*" component={NotFound404} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
