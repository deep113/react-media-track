import React from 'react';
 
/**
 * A counter button: tap the button to increase the count.
 */
class Contact extends React.Component {
 constructor(){
	 super();
	 document.getElementsByTagName('body')[0].className='contact-page';
 }
  render() {
    return (
      <h1> This is Contact Page</h1>
    );
  }
}
export default Contact;