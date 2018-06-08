import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sellStock } from './actions/makeTransaction';
import FacebookShareButton from './profile/socialMediaButtons/facebookShareButton'
import TwitterShareButton from './profile/socialMediaButtons/twitterShareButton'
import GoogleShareButton from './profile/socialMediaButtons/googleShareButton'
import TransactionHistory from './profile/transactionHistory'
import Wallet from './profile/wallet'

class Profile extends Component {
  render() {
    return (
      <div className="Profile" style={{ width: '100%' }}>
        <p>E-mail: {this.props.user.email}</p>
        <p>Profile name: {this.props.user.name}</p>
        <p>Money: {this.props.user.money}</p>
        <Wallet data={this.props.user.wallet.filter(transaction => transaction.amount > 0)}/>
        <TransactionHistory data={this.props.user.wallet.filter(transaction => transaction.sold)} />
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