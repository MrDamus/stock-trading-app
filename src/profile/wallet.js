import React from 'react';
import PropTypes from 'prop-types'
import TransactionListElement from './transactionListElement.js'

const Wallet = ({ data }) => (
<div className='wallet' key={data.date} style={{ display: "flex", flexDirection: "column" }}>
  <h3 style={{ alignSelf: 'center' }}>Wallet</h3>
  <ul style={{ display: "flex", flexDirection: "column" }}>
    {data.map((transaction, i) => <TransactionListElement key={`${data.date}:${i}`} data={transaction} /> )}
  </ul>
</div>
)

Wallet.propTypes = {
  data: PropTypes.array.isRequired
}

export default Wallet;