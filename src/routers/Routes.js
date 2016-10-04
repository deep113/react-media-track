import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, hashHistory, RouteHandler, Redirect, DefaultRoute } from 'react-router';

import Home from '../components/pages/dashboard/home/Home';

import Campaign from '../components/pages/dashboard/campaign/Campaign';
import Client from '../components/pages/dashboard/client/Client';
import PurchaseOrder from '../components/pages/dashboard/purchase_order/PurchaseOrder';
import RequestOrder from '../components/pages/dashboard/request_order/RequestOrder';
import Vendor from '../components/pages/dashboard/vendor/Vendor';

import Settings from '../components/pages/dashboard/settings/Settings';
import Profile from '../components/pages/dashboard/profile/Profile';

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
					<Route name="dashboard.campaign" path="/campaign" component={Campaign} />
					<Route name="dashboard.client" path="/client" component={Client} />
					<Route name="dashboard.purchase_order" path="/purchase_order" component={PurchaseOrder} />
					<Route name="dashboard.request_order" path="/request_order" component={RequestOrder} />
					<Route name="dashboard.vendor" path="/vendor" component={Vendor} />
					<Route name="dashboard.settings" path="/settings" component={Settings} />
					<Route name="dashboard.profile" path="/profile" component={Profile} />
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
