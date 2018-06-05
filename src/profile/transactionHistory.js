import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';


const TransactionHistory = (data) =>
  (<div className="transactionHistory" key={data.date}>
    <h3>Transaction History</h3>
    <ul>
      {/* {data.user.wallet.map(TransactionHistory)} */}
      <p key={data.date}>
        {`You sold: ${data.amount} stocks of ${data.symbol} ${data.companyName} on ${moment(data.date).format('MMM DD h:mm A')} for ${data.price}$ earning: `}
      </p>
    </ul>
  </div>
)

const mapDispatchToProps = (dispatch) => {
  return {
    // selectValue: (user) => dispatch(selectValue(user)),
  }
}

TransactionHistory.propTypes = {
  
};


export default connect(null, mapDispatchToProps)(TransactionHistory);