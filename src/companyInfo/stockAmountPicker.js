import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectValue, buyStock } from '../actions'

class StockAmountPicker extends Component {
  render() {
    const { price, selectValue, buyStock, amount } = this.props
    return (
      <FormGroup controlId="howMany" bsSize="large" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}} >
        <ControlLabel style={{margin: '0 auto'}}>Amount:</ControlLabel>
        <FormControl
          style={{ width: '25%', margin: '0 auto' }}
          autoFocus
          type="number"
          placeholder="quantity"
          min={0}
          max={100000}
          required
          value={this.props.amount}
          onChange={e => selectValue(e.target.value)}
          />
        <p style={{ margin: '0 auto'}}>price: {price}</p>
        <p style={{ margin: '0 auto'}}>This will cost: {cost(amount, price)}</p>
        <div style={{ margin: '0 auto'}}>
        <Button
          block
          bsStyle="success"
          // disabled={!this.validateMoney()}
          type="submit"
          onClick={buyStock}
          >
          Buy securities
        </Button>
        </div>
      </FormGroup>
    )
  }
}

const cost = (amount, price) => {
  return (amount * price).toFixed(2)
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
  amount: PropTypes.number,
  price: PropTypes.number,
  selectValue: PropTypes.func,
  buyStock: PropTypes.func,
};

StockAmountPicker.defaultProps = {
  amount: '0',
  price: '0',
  selectValue: () => void(0),
  buyStock: () => void(0),
  
}

export default connect(mapStateToProps, mapDispatchToProps)(StockAmountPicker);
