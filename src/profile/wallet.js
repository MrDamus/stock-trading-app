import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { sellStock } from '../actions';
import { Button } from 'react-bootstrap';
import TransactionListElement from './transactionListElement.js'

const Wallet = ({ data }) => (
<div className='wallet' key={data.date}>
  <h3>Wallet</h3>
  <ul style={{ display: "flex", justifyContent: "space-around" }}>
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

};


export default connect(null, mapDispatchToProps)(Wallet);