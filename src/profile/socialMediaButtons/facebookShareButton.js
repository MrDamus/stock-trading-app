import React, { Component } from 'react';

class FacebookShareButton extends Component {
  render() {
    return (
      <a className="facebookShareButton" 
      style={{display: 'inline-block', textDecoration: 'none', color: '#fff', margin: '0.5em'}}  
      href="https://facebook.com/sharer/sharer.php?u=http%3A%2F%2Fsharingbuttons.io" 
      target="_blank" rel="noopener noreferrer" aria-label="Facebook">
      <div className="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--medium" 
      style={{display: 'inline-block', backgroundColor: '#3b5998', borderColor: '#3b5998', borderRadius: '5px', transition: '25ms ease-out', padding: '0.5em 0.75em', fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif'}}>
      <div aria-hidden="true" className="resp-sharing-button__icon resp-sharing-button__icon--solid" 
      style={{display: 'inline-block', width: '1em', height: '1em', marginRight: '0.4em', verticalAlign: 'top' , fill: '#fff', stroke: 'none'}}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
      </svg>
      </div>Facebook</div>
      </a>
    )
  }
}

export default FacebookShareButton;