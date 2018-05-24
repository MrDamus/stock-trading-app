import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      price: '',
      user: {
        name: "",
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
    })
    .then(data => this.setState({ user: data.user.name }))
    .then(data => this.setState({ user: data.user.email }))
    .then(data => this.setState({ user: data.user.wallet }))
    
    .catch(e => console.warn(e))
  }

  render() {
    return (
      <div className="Profile" style='{}'>
        {`
          Profile name: ${this.props.user.name}
          E-mail: ${this.props.user.email} 
          Money: ${this.props.user.money}
        `}
        <div className="wallet">
        {/* {`You own: ${this.state.wallet.amount} of ${this.state.wallet.symbol} company. `} */}
        </div> 
      </div>
    );
  }
}


// TODO: map state to props user data
const mapStateToProps = ({userData}) => ({
  user: userData.user,
})

export default connect(mapStateToProps)(Profile);
