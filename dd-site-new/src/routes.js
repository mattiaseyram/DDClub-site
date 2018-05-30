import React from 'react';
import { Route, Switch } from 'react-router';

// Import modules/routes
import Home from './home';
import PrimaryPage from './primarypage';
import PageNotFound from './common/components/PageNotFound';

export default (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/pages/:slug" component={PrimaryPage}/>
    <Route component={PageNotFound} />
  </Switch>
);