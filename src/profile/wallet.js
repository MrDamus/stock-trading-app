import React from 'react';
import { connect } from 'react-redux';
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

const mapDispatchToProps = (dispatch) => {
  return {
    // selectValue: (user) => dispatch(selectValue(user)),
  }
}

Wallet.propTypes = {
  data: PropTypes.array.isRequired
}

export default connect(null, mapDispatchToProps)(Wallet);