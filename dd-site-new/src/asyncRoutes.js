import React from 'react';
import { Route, Switch } from 'react-router';
import Loadable from 'react-loadable';
import AppLoader from './common/components/AppLoader';

// Import modules/routes
import Home from './home';
import PrimaryPage from './primarypage';
import PageNotFound from './common/components/PageNotFound';

// Code splitting with dynamic import
// https://reactjs.org/docs/code-splitting.html
const Home = Loadable({
	loader: () => import('./home'),
	loading: AppLoader
});


export default (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route exact path="/pages/:slug" component={PrimaryPage} />
		<Route path="*" component={PageNotFound} />
	</Switch>
);
