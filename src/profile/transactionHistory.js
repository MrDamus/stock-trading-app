import React from 'react';
import PropTypes from 'prop-types';
import TransactionHistoryListElement from './transactionHistoryListElement.js'

const TransactionHistory = ({data}) =>
  (<div className="transactionHistory" style={{ display: "flex", flexDirection: "column" }}>
    <h3 style={{ alignSelf: 'center' }}>Transaction History</h3>
    <ul style={{ display: "flex", flexDirection: "column" }}>
      {data
        ? data.map(transaction => <TransactionHistoryListElement key={data.date} data={transaction} />)
        : null
      }
    </ul>
  </div>
  )

TransactionHistory.propTypes = {
  data: PropTypes.array
};

export default TransactionHistory;