import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, hashHistory } from 'react-router';
/**
 * A counter button: tap the button to increase the count.
 */
class Base extends React.Component {

  render() {
    return (
		<div id="dyd-main">
			{this.props.children}
		</div>
    );
  }
}
export default Base;
