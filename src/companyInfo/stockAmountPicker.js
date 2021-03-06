import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectValue } from '../actions'
import { buyStock } from '../actions/makeTransaction'

const StockAmountPicker = ({ price, selectValue, buyStock, amount, message }) => ([
  <FormGroup key="form" controlId="howMany" bsSize="large" style={{ display: 'flex', flexDirection: 'column' }} >
    <ControlLabel style={{ alignSelf: 'center' }}>Amount:</ControlLabel>
    <FormControl
      style={{ width: '15%', minWidth:'100px', alignSelf: 'center', textAlign: 'center'}}
      autoFocus
      type="number"
      placeholder="quantity"
      min={0}
      max={100000}
      required
      value={amount}
      onChange={e => selectValue(e.target.value)}
    />
    <p style={{ alignSelf: 'center' }}>price: {price}</p>
    <p style={{ alignSelf: 'center' }}>This will cost: {cost(amount, price)}</p>
    <div style={{ alignSelf: 'center' }}>
      <Button
        block
        bsStyle="success"
        type="submit"
        onClick={buyStock}
      >
        Buy securities
        </Button>
    </div>
  </FormGroup>,
  <p key="message">{message}</p>
]
)

const cost = (amount, price) => {
  return (amount * price).toFixed(2)
}

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    selectValue: (user) => dispatch(selectValue(user)),
    buyStock: () => dispatch(buyStock())
    .catch(error => alert(error))
  }
}

const mapStateToProps = ({ stockPicker, transactions }) => ({
  amount: stockPicker.amount,
  message: transactions.message
})

StockAmountPicker.propTypes = {
  amount: PropTypes.number,
  price: PropTypes.number,
  selectValue: PropTypes.func,
  buyStock: PropTypes.func,
};

StockAmountPicker.defaultProps = {
  amount: 0,
  price: 0,
  selectValue: () => null,
  buyStock: () => null,
}

export default connect(mapStateToProps, mapDispatchToProps)(StockAmountPicker);