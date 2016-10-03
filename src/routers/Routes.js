import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, hashHistory, RouteHandler, Redirect, DefaultRoute } from 'react-router';

import Home from '../components/pages/dashboard/home/Home';
import Login from '../components/pages/Login';
import NotFound from '../components/pages/NotFound';

import Base from '../components/layouts/Base';
import Dashboard from '../components/layouts/Dashboard';


var Routes = React.createClass({


  render: function() {
	 return (
			<Router history={hashHistory}>
			<Route name="base" path="/" component={Base} >
				<Route name="dashboard" path="/dashboard" component={Dashboard}>
					<Route name="dashboard.home" path="/home" component={Home} />
				</Route>
				<Route path="login" name="login" component={Login} />
				 <IndexRoute component={Login} />
				 <Route path='*' component={NotFound} />
			</Route>
			</Router>
			
      );
  }
  
});

export default Routes;
