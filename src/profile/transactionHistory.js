import React from 'react';
import PropTypes from 'prop-types';
import TransactionHistoryListElement from './transactionListElement.js'

const TransactionHistory = ({data}) =>
  (<div className="transactionHistory" key={data.date}>
    <h3>Transaction History</h3>
    <ul style={{ display: "flex", flexDirection: "column" }}>
      {data.map(transactionHistory => <TransactionHistoryListElement key={data.date} data={transactionHistory} />)}
    </ul>
  </div>
  )

TransactionHistory.propTypes = {
  data: PropTypes.array
};

export default TransactionHistory;