import React from 'react';
 import { Router, Route, Link, browserHistory, IndexRoute, hashHistory } from 'react-router';
/**
 * A counter button: tap the button to increase the count.
 */
class PurchaseOrder extends React.Component {

		constructor(){
		super();
			 
		}
		
  render() {
    return (
	<div>
    <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">     
          <div className="row">
            <ol className="breadcrumb">
              <li><Link to="/home"><i className="fa fa-home" aria-hidden="true"></i></Link></li>
              <li className="active">PurchaseOrder</li>
            </ol>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <h1 className="page-header">PurchaseOrder</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacus nulla, fermentum vel dapibus eu, dignissim et massa. Integer id arcu consectetur, luctus dolor sed, scelerisque justo. Duis venenatis maximus nisi, nec sodales tortor tempus pellentesque. Suspendisse enim mi, egestas id erat nec, rutrum fringilla ex. Phasellus ac vehicula quam, a semper erat. Mauris molestie quam nunc, ac iaculis enim lobortis eget. Duis at sapien felis.</p>
    <p>
Donec sit amet nulla vel erat accumsan mattis eu vehicula arcu. Cras rhoncus mauris ipsum, sit amet vulputate diam porta quis. In magna justo, malesuada vitae aliquam sed, imperdiet nec diam. Suspendisse ac lobortis elit, sed consectetur elit. Fusce est ipsum, tempus at lacus et, auctor accumsan erat. Proin a neque in lorem pulvinar dapibus et et sapien. Quisque gravida massa porta, mattis risus sit amet, bibendum enim. Fusce hendrerit, mauris sit amet imperdiet molestie, odio ex sollicitudin elit, vitae tincidunt massa neque et dolor. In pulvinar felis et mauris vestibulum cursus. Nullam a vulputate leo. Aenean nec libero ac enim tristique faucibus. Ut nisi eros, cursus sed augue et, vestibulum tempor est. Etiam vitae ligula a ante facilisis sagittis et quis metus. In hac habitasse platea dictumst. In in nibh eu lacus elementum sollicitudin.
    </p>
Curabitur sed nibh lectus. Nullam a lacus a est blandit tincidunt. Vestibulum a luctus felis, eu convallis urna. Vivamus sed est dolor. Duis malesuada molestie blandit. Vivamus vitae lacus eget nulla elementum bibendum vitae quis ligula. Proin tellus mauris, volutpat et orci ornare, suscipit dignissim nibh. Curabitur porttitor tellus fringilla mattis fermentum. Vivamus vitae neque non quam faucibus pharetra. Duis malesuada quam elementum, consequat purus interdum, volutpat velit. Donec ut magna sit amet libero maximus molestie non eget augue. Pellentesque ante sapien, aliquet id vulputate sed, luctus eget augue.
    <p>
Aliquam ultrices quis tellus ac maximus. Nunc dictum sit amet urna vel fringilla. Nulla sed feugiat diam. Praesent viverra, velit eu hendrerit tristique, urna felis viverra erat, quis malesuada massa lectus sed libero. Nullam rutrum urna nisl, vitae imperdiet justo tempus quis. Morbi semper scelerisque tortor sed elementum. Aliquam varius ipsum et felis pretium, eu molestie nunc dignissim. Aenean quis nulla at quam eleifend eleifend.
    </p>
        <p>
Duis dapibus turpis in ex condimentum, ac euismod arcu placerat. Sed in purus tristique, finibus nulla eget, gravida massa. Praesent malesuada, velit vel elementum pellentesque, nulla massa viverra felis, a varius quam orci sed massa. Morbi porttitor auctor sodales. Nulla tempor ultricies justo, egestas pulvinar purus fermentum ut. Duis fermentum rhoncus turpis in cursus. Nulla in rutrum orci. Praesent ac lacinia nunc. Nam scelerisque, orci in varius pharetra, lacus eros lobortis mi, et feugiat enim mauris sed mauris. Etiam efficitur sed nisi eget convallis. Nam bibendum congue est, a sollicitudin nisi. Phasellus cursus libero interdum, facilisis lectus et, malesuada odio.
             </p>
              </div>
          </div>
        </div>  
      </div>

    );
  }
}
export default PurchaseOrder;