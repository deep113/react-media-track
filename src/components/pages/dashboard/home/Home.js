import React from 'react';
 
/**
 * A counter button: tap the button to increase the count.
 */
class Home extends React.Component {
	constructor(){
		super();
		document.getElementsByTagName('body')[0].className='home-page';
	}
  render() {
    return (
     <h1> This is Home Page</h1>
    );
  }
}
export default Home;