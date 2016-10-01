import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, hashHistory } from 'react-router'
import Home from './Home';
import About from './About';
import Contact from './Contact';

const App = React.createClass({
render() {
if(this.props.location.pathname!='/contact'){
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
)
}else{
return (
<div>
<h1>Login Page</h1>

<ul >
<li><Link to="/home">Home</Link></li>
</ul>
<div id="main">
{this.props.children}
</div>
</div>
)	
}
}
})
ReactDOM.render((
<Router history={hashHistory}>
<Route path="/" component={App}>
<Route path="home" component={Home} />
<Route path="about" component={About} />
<Route path="contact" component={Contact} />
</Route>
</Router>
),   document.getElementById('app'))