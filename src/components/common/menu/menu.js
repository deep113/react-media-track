import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, hashHistory } from 'react-router';
/**
 * A counter button: tap the button to increase the count.
 */
class Menu extends React.Component {

  render() {
    return (
		<div>
		<h1>App</h1>

		<ul >
		<li><Link to="/home">Home</Link></li>
		<li><Link to="/about">About</Link></li>
		<li><Link to="/contact">Contact</Link></li>
		</ul>
		<div id="main">
		{this.props.children}
		</div>
		</div>
    );
  }
}
export default Menu;
