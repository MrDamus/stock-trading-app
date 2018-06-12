import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sellStock } from './actions/makeTransaction';
import FacebookShareButton from './profile/socialMediaButtons/facebookShareButton'
import TwitterShareButton from './profile/socialMediaButtons/twitterShareButton'
import GoogleShareButton from './profile/socialMediaButtons/googleShareButton'
import TransactionHistory from './profile/transactionHistory'
import Wallet from './profile/wallet'

const Profile = ({ user }) => (
      <div className="Profile" style={{ width: '100%' }}>
        <p>E-mail: {user.email}</p>
        <p>Profile name: {user.name}</p>
        <p>Money: {user.money}</p>
        <Wallet data={user.wallet.filter(transaction => transaction.amount > 0)}/>
        <TransactionHistory data={user.transactionHistory} />
        <div className="socialMediaButtons">
          <FacebookShareButton />
          <TwitterShareButton />
          <GoogleShareButton />
        </div>
      </div>
    );

const mapDispatchToProps = (dispatch) => {
  return {
    sellStock: () => dispatch(sellStock()),
  }
}

const mapStateToProps = ({ userData }) => ({
  user: userData.user,
})

Profile.propTypes = {
  user: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);