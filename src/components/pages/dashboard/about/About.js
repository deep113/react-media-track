import React from 'react';
 
/**
 * A counter button: tap the button to increase the count.
 */
class About extends React.Component {

		constructor() {
		super();
		document.getElementsByTagName('body')[0].className='about-page';
			
		}
 
  render() {
    return (
     <h1> This is About Page</h1>
    );
  }
}
export default About;