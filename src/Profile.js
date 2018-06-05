import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Button } from 'react-bootstrap';
import { sellStock } from './actions';
import FacebookShareButton from './profile/socialMediaButtons/facebookShareButton'
import TwitterShareButton from './profile/socialMediaButtons/twitterShareButton'
import GoogleShareButton from './profile/socialMediaButtons/googleShareButton'
import TransactionHistory from './profile/transactionHistory'
import Wallet from './profile/wallet'

// To it's own file          DONE
// const stocks = (data) =>
//   (<div key={data.date} style={{ display: "flex", justifyContent: "space-around" }}>
//     <p>
//       {`You own: ${data.amount}
//    stock of ${data.symbol} ${data.companyName}
//    company bought on ${moment(data.date).format('MMM DD h:mm A')}
//    for ${data.price}$`}
//     </p>
//     <p>
//       <Button
//         bsSize="small"
//         bsStyle="warning"
//         // type="submit"
//         onClick={sellStock}
//       >
//         Sell
//   </Button>
//     </p>
//   </div>
//   )

  // To it's own file         DONE
// const transactionHistory = (data) =>
//   (<div key={data.date}>
//     <p key={data.date}>
//       {`You sold: ${data.amount} stocks of ${data.symbol} ${data.companyName} on ${moment(data.date).format('MMM DD h:mm A')} for ${data.price}$ earning: `}
//     </p>
//   </div>)

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

  // To redux already done?
  // updateUserState(user) {
  //   return fetch('http://localhost:8080/users', {
  //     method: 'GET',
  //     body: JSON.stringify(user),
  //     headers: {
  //       'content-type': 'application/json'
  //     },
  //   })
  //     .then(data => this.setState({ user: data.user.name }))
  //     .then(data => this.setState({ user: data.user.email }))
  //     .then(data => this.setState({ user: data.user.wallet }))
  //     .catch(e => console.warn(e))
  // }

  render() {
    return (
      <div className="Profile" style={{ width: '100%' }}>
        {`
          E-mail: ${this.props.user.email} 
          Profile name: ${this.props.user.name}
          Money: ${this.props.user.money}
        `}
        <Wallet/>
        {/* <div className="wallet">
          <h3>Wallet</h3>
          <ul>
            {this.props.user.wallet.map(stocks)}
          </ul>
        </div> */}
        <TransactionHistory/>
        {/* <div className="transactionHistory">
          <h3>Transaction History</h3>
          <ul>
            {this.props.user.wallet.map(transactionHistory)}
          </ul>
        </div> */}
        <div className="socialMediaButtons">
          <FacebookShareButton />
          <TwitterShareButton />
          <GoogleShareButton />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sellStock: () => dispatch(sellStock()),
  }
}

const mapStateToProps = ({ userData }) => ({
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);