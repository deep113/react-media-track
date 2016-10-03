import React from 'react';
 import {Link, transitionTo,hashHistory} from 'react-router';
/**
 * A counter button: tap the button to increase the count.
 */
class Login extends React.Component {
    static willTransitionTo(transition) {
    
    //  transition.redirect('login', {}, { 'nextPath': transition.path });

    
    }
   constructor() {
    super();
    this.state = {
     
    };
    this.logincheck = this.logincheck.bind(this);
  }
  logincheck() {
    alert('Login Success.');
    hashHistory.push('/home');
  }
  render() {
    return (
		<div className="row">
        <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-4">
          <div className="login-panel panel panel-default">
            <div className="panel-heading">Log in</div>
            <div className="panel-body">
           
                <fieldset>
                  <div className="form-group">
                    <input className="form-control" placeholder="E-mail" name="email" type="email"  />
                  </div>
                  <div className="form-group">
                    <input className="form-control" placeholder="Password" name="password" type="password"  />
                  </div>
                  <div className="checkbox">
                    <label>
                      <input name="remember" type="checkbox"  />Remember Me
                    </label>
                  </div>
                  <button className="btn btn-primary" onClick={this.logincheck}>Login</button><br />
                </fieldset>
			
             
            </div>
          </div>
        </div>
      </div>

     
    );
  }
}
export default Login;