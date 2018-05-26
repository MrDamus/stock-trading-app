import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class StockAmountPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.warn(e.target.value);
    this.setState({ amount : e.target.value })
  }

  render() {
    const { price, symbol, companyName } = this.props
    return (
      <FormGroup controlId="howMany" bsSize="large">
        <ControlLabel>Amount:</ControlLabel>
        <FormControl
          style={{ width: '100px' }}
          autoFocus
          type="number"
          placeholder="quantity"
          min={0}
          max={100000}
          required
          value={this.state.amount}
          onChange={this.handleChange}
        />
        <Button
          block
          bsStyle="success"
          // disabled={!this.validateMoney()}
          type="submit"
        // onClick={() => this.buyStock(symbol, howMany.value)}
        >
          Buy securities
    </Button>
      </FormGroup>
    )
  }
}

//  buyStock(symbol, ) {
// let sum = this.howMany.value * price
// if (sum > money) {
//   alert(`You don't have enough money.`)
// } else
//  this.props.user.money - sum
//  alert(`You have bought ${howMany.value} stocks of ${companyName}`)
// }

const mapStateToProps = ({ stockData }) => ({
  price: stockData.details.latestPrice,
  symbol: stockData.details.symbol,
  companyName: stockData.details.companyName,
  chart: stockData.chartData
})

StockAmountPicker.propTypes = {
  price: PropTypes.any,
  symbol: PropTypes.string,
  companyName: PropTypes.string,
  chart: PropTypes.array
};

StockAmountPicker.defaultProps = {
  price: '0',
  symbol: 'company symbol',
  companyName: 'company name',
  chart: {}
}

export default connect(mapStateToProps)(StockAmountPicker);
