import React from 'react';
import PropTypes from 'prop-types';
import TransactionHistoryListElement from './transactionHistoryListElement.js'

const TransactionHistory = ({data}) =>
  (<div className="transactionHistory" key={data.date}>
    <h3>Transaction History</h3>
    <ul style={{ display: "flex", flexDirection: "column" }}>
      {data.map(transaction => <TransactionHistoryListElement key={data.date} data={transaction} />)}
    </ul>
  </div>
  )

TransactionHistory.propTypes = {
  data: PropTypes.array
};

export default TransactionHistory;