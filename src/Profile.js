import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';



const stocks = (data) => (<p>
  {`You own: ${data.amount}
   stock of ${data.symbol}
   company bought on ${moment(data.date).format('MMM DD h:mm A')}`}
</p>)


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
      },
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
      <div className="Profile" style={{ width: '100%' }}>
        {`
          E-mail: ${this.props.user.email} 
          Profile name: ${this.props.user.name}
          Money: ${this.props.user.money}
        `}
        <div className="wallet">
        <h3>Wallet</h3>
        <ul>
        {this.props.user.wallet.map(stocks)}
        </ul>
        </div> 
      </div>
    );
  }
}

const mapStateToProps = ({userData}) => ({
  user: userData.user,
})

Profile.propTypes = {
  name: PropTypes.string,
  symbol: PropTypes.string,
  email: PropTypes.string,
  money: PropTypes.number
};

Profile.defaultProps = {
  name: 'Name',
  symbol: 'company symbol',
  email: 'email',
  money: 0
}

export default connect(mapStateToProps)(Profile);
