import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, hashHistory } from 'react-router';
/**
 * A counter button: tap the button to increase the count.
 */
class Dashboard extends React.Component {
	 constructor(){
    super();
      this.state = {
        homeactive: "active",
        campaignactive: "",
        clientactive: "",
        purchase_orderactive: "",
        request_orderactive: "",
        vendoractive:""
      };
      //this.menuClick = this.menuClick.bind(this);
    }
    componentWillMount(){

    
    }
    menuClick(flagactive) {
 
      this.setState(
        {
        homeactive:flagactive=="homeactive"?"active":"" ,
        campaignactive: flagactive=="campaignactive"?"active":"",
        clientactive: flagactive=="clientactive"?"active":"",
        purchase_orderactive: flagactive=="purchase_orderactive"?"active":"",
        request_orderactive: flagactive=="request_orderactive"?"active":"",
        vendoractive:flagactive=="vendoractive"?"active":""
      }
      );

  
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
              <a className="navbar-brand" href="/#/home"><span>Media </span>Track</a>
              <ul className="user-menu">
                <li className="dropdown pull-right">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user" aria-hidden="true"></i> User <span className="caret" /></a>
                  <ul className="dropdown-menu" role="menu">
                    <li className={this.state.profilective} onClick={this.menuClick.bind(this,'profilective')}><Link to="/profile"><i className="fa fa-user-md" aria-hidden="true"></i> Profile</Link></li>
                    <li className={this.state.settingsactive} onClick={this.menuClick.bind(this,'settingsactive')}><Link to="/settings"><i className="fa fa-cog" aria-hidden="true"></i> Settings</Link></li>
                    <li className={this.state.loginactive} onClick={this.menuClick.bind(this,'loginactive')}><Link to="/login"><i className="fa fa-sign-out" aria-hidden="true"></i> Logout</Link></li>
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
            <li className={this.state.homeactive} onClick={this.menuClick.bind(this,'homeactive')}><Link to="/home"><i className="fa fa-tachometer" aria-hidden="true"></i> Dashboard</Link></li>
            <li className={this.state.campaignactive} onClick={this.menuClick.bind(this,'campaignactive')}><Link to="/campaign"><i className="fa fa-diamond" aria-hidden="true"></i> Campaign</Link></li>
            <li className={this.state.clientactive} onClick={this.menuClick.bind(this,'clientactive')}><Link to="/client"><i className="fa fa-users" aria-hidden="true"></i> Client</Link></li>
            <li className={this.state.purchase_orderactive} onClick={this.menuClick.bind(this,'purchase_orderactive')}><Link to="/purchase_order"><i className="fa fa-money" aria-hidden="true"></i> Purchase Order</Link></li>
            <li className={this.state.request_orderactive} onClick={this.menuClick.bind(this,'request_orderactive')}><Link to="/request_order"><i className="fa fa-credit-card-alt" aria-hidden="true"></i> Request Order</Link></li>
            <li className={this.state.vendoractive} onClick={this.menuClick.bind(this,'vendoractive')}><Link to="/vendor"><i className="fa fa-building-o" aria-hidden="true"></i> Vendor</Link></li>
            <li role="presentation" className="divider" />
            
          </ul>
        </div>
      
            {this.props.children}
  

        </div>
    );
  }
}
export default Dashboard;
