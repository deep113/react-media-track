import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, hashHistory } from 'react-router';
/**
 * A counter button: tap the button to increase the count.
 */
class Dashboard extends React.Component {
	 constructor(){
    super();
        
    }
  render() {
    console.log(this.props.location);
    return (
	<div>
		<nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#sidebar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="#"><span>Media Track</span> Admin</a>
              <ul className="user-menu">
                <li className="dropdown pull-right">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user" aria-hidden="true"></i> User <span className="caret" /></a>
                  <ul className="dropdown-menu" role="menu">
                    <li><Link to="/profile"><i className="fa fa-user-md" aria-hidden="true"></i> Profile</Link></li>
                    <li><Link to="/settings"><i className="fa fa-cog" aria-hidden="true"></i> Settings</Link></li>
                    <li><Link to="/login"><i className="fa fa-sign-out" aria-hidden="true"></i> Logout</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div id="sidebar-collapse" className="col-sm-3 col-lg-2 sidebar">
          <form role="search">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Search" />
            </div>
          </form>
          <ul className="nav menu">
            <li className="active"><Link to="/home"><i className="fa fa-tachometer" aria-hidden="true"></i> Dashboard</Link></li>
            <li><Link to="/campaign"><i className="fa fa-diamond" aria-hidden="true"></i> Campaign</Link></li>
            <li><Link to="/client"><i className="fa fa-users" aria-hidden="true"></i> Client</Link></li>
            <li><Link to="/purchase_order"><i className="fa fa-money" aria-hidden="true"></i> Purchase Order</Link></li>
            <li><Link to="/request_order"><i className="fa fa-credit-card-alt" aria-hidden="true"></i> Request Order</Link></li>
            <li><Link to="/vendor"><i className="fa fa-building-o" aria-hidden="true"></i> Vendor</Link></li>
            <li role="presentation" className="divider" />
            
          </ul>
        </div>
      
            {this.props.children}
  

        </div>
    );
  }
}
export default Dashboard;
