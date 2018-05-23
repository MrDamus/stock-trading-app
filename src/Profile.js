import React, { Component } from 'react';
import './App.css';


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      price: '',
      user: {
        name: "Test",
        email: "",
        password: "",
        wallet: [],
        money: 1000
      }
    };
  }

  updateUserState(user) {
    return fetch('http://localhost:8080/users', {
        method: 'GET',
        body: JSON.stringify(user),
        headers: {
          'content-type': 'application/json'
        },
    }).then(data => this.setState({ user: data.user.email, }))
    .then()
    .catch(e => console.warn(e))
  }

  componentDidMount(user) {
    fetch('http://localhost:8080/users')
    .then(response => response.json().then(data => this.setState({ user: data.user.email })))
    // .then(data => this.setState({ user: data }))
    .catch(e => console.warn(e))
    console.log(user)

  }

  render() {    
    return (
      <div className="Profile">
        {`Profile name: ${this.state.user.name}
          E-mail: ${this.state.user.email} 
          Money: ${this.state.user.money}`}
        <div className="wallet">
        {/* {`You own: ${this.state.wallet.amount} of ${this.state.wallet.symbol} company. `} */}

       
        </div> 
      </div>
    );
  }
}


export default Profile;
