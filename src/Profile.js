import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sellStock } from './actions';
import FacebookShareButton from './profile/socialMediaButtons/facebookShareButton'
import TwitterShareButton from './profile/socialMediaButtons/twitterShareButton'
import GoogleShareButton from './profile/socialMediaButtons/googleShareButton'
import TransactionHistory from './profile/transactionHistory'
import Wallet from './profile/wallet'

  // To it's own file         DONE
// const transactionHistory = (data) =>
//   (<div key={data.date}>
//     <p key={data.date}>
//       {`You sold: ${data.amount} stocks of ${data.symbol} ${data.companyName} on ${moment(data.date).format('MMM DD h:mm A')} for ${data.price}$ earning: `}
//     </p>
//   </div>)

class Profile extends Component {
  render() {
    return (
      <div className="Profile" style={{ width: '100%' }}>
        <p>E-mail: {this.props.user.email}</p>
        <p>Profile name: {this.props.user.name}</p>
        <p>Money: {this.props.user.money}</p>
        <Wallet data={this.props.user.wallet}/>
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