import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectValue, buyStock } from '../actions'

class StockAmountPicker extends Component {
  render() {
    const { price, symbol, companyName, selectValue, buyStock, amount } = this.props
    return (
      <FormGroup controlId="howMany" bsSize="large" >
        <ControlLabel>Amount:</ControlLabel>
        <FormControl
          style={{ width: '100px' }}
          autoFocus
          type="number"
          placeholder="quantity"
          min={0}
          max={100000}
          required
          value={this.props.amount}
          onChange={e => selectValue(e.target.value)}
        />
        <p>This will cost: {cost(amount, price)}</p>
        <p>amount: {amount}</p>
        <p>price: {price}</p>
        <Button
          block
          bsStyle="success"
          // disabled={!this.validateMoney()}
          type="submit"
          onClick={buyStock}
        >
          Buy securities
        </Button>
      </FormGroup>
    )
  }
}

const cost = (amount, price) => {
  return amount * price
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectValue: (user) => dispatch(selectValue(user)),
    buyStock: () => dispatch(buyStock()),
  }
}

const mapStateToProps = ({ stockPicker }) => ({
  amount: stockPicker.amount
})

StockAmountPicker.propTypes = {
  amount: PropTypes.number
};

StockAmountPicker.defaultProps = {
  amount: '0',
}

export default connect(mapStateToProps, mapDispatchToProps)(StockAmountPicker);
