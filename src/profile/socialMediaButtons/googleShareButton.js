import React, { Component } from 'react';

class GoogleShareButton extends Component {
  render() {
    return (
      <a className="googleShareButton"
      style={{display: 'inline-block', textDecoration: 'none', color: '#fff', margin: '0.5em'}}  
      href="https://plus.google.com/share?url=http%3A%2F%2Fsharingbuttons.io" 
      target="_blank" rel="noopener noreferrer" aria-label="Google+">
      <div className="resp-sharing-button resp-sharing-button--google resp-sharing-button--medium"
      style={{display: 'inline-block', backgroundColor: '#dd4b39', borderColor: '#dd4b39', borderRadius: '5px', transition: '25ms ease-out', padding: '0.5em 0.75em', fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif'}}>
      <div aria-hidden="true" className="resp-sharing-button__icon resp-sharing-button__icon--solid"
      style={{display: 'inline-block', width: '1em', height: '1em', marginRight: '0.4em', verticalAlign: 'top' , fill: '#fff', stroke: 'none'}}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M11.37 12.93c-.73-.52-1.4-1.27-1.4-1.5 0-.43.03-.63.98-1.37 1.23-.97 1.9-2.23 1.9-3.57 0-1.22-.36-2.3-1-3.05h.5c.1 0 .2-.04.28-.1l1.36-.98c.16-.12.23-.34.17-.54-.07-.2-.25-.33-.46-.33H7.6c-.66 0-1.34.12-2 .35-2.23.76-3.78 2.66-3.78 4.6 0 2.76 2.13 4.85 5 4.9-.07.23-.1.45-.1.66 0 .43.1.83.33 1.22h-.08c-2.72 0-5.17 1.34-6.1 3.32-.25.52-.37 1.04-.37 1.56 0 .5.13.98.38 1.44.6 1.04 1.84 1.86 3.55 2.28.87.23 1.82.34 2.8.34.88 0 1.7-.1 2.5-.34 2.4-.7 3.97-2.48 3.97-4.54 0-1.97-.63-3.15-2.33-4.35zm-7.7 4.5c0-1.42 1.8-2.68 3.9-2.68h.05c.45 0 .9.07 1.3.2l.42.28c.96.66 1.6 1.1 1.77 1.8.05.16.07.33.07.5 0 1.8-1.33 2.7-3.96 2.7-1.98 0-3.54-1.23-3.54-2.8zM5.54 3.9c.33-.38.75-.58 1.23-.58h.05c1.35.05 2.64 1.55 2.88 3.35.14 1.02-.08 1.97-.6 2.55-.32.37-.74.56-1.23.56h-.03c-1.32-.04-2.63-1.6-2.87-3.4-.13-1 .08-1.92.58-2.5zM23.5 9.5h-3v-3h-2v3h-3v2h3v3h2v-3h3"/>
      </svg></div>Google+</div>
    </a>
    )
  }
}

export default GoogleShareButton;