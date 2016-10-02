import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, hashHistory } from 'react-router';

import Home from '../components/pages/dashboard/home/Home';
import About from '../components/pages/dashboard/about/About';
import Contact from '../components/pages/dashboard/contact/Contact';

import Menu from '../components/common/menu/Menu';

var Routes = React.createClass({

  statics: {
    getRoutes: function() {
      return (
			
			<Route path="/" component={Menu} >
			<Route path="home" component={Home} />
			<Route path="about" component={About} />
			<Route path="contact" component={Contact} />
			</Route>
			
      );
    }
  },
  render: function() {
  
  }
  
});

export default Routes;
