import React from 'react';
import PropTypes from 'prop-types'
import TransactionListElement from './transactionListElement.js'

const Wallet = ({ data }) => (
<div className='wallet' key={data.date}>
  <h3>Wallet</h3>
  <ul style={{ display: "flex", flexDirection: "column" }}>
    {data.map(transaction => <TransactionListElement key={data.date} data={transaction} /> )}
  </ul>
</div>
)

Wallet.propTypes = {
  data: PropTypes.array.isRequired
}

export default Wallet;