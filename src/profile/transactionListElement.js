import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { sellStock } from '../actions/makeTransaction';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { selectValue } from '../actions'

class TransactionListElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 1,
    };
  }

  render() {
    const { data, sell } = this.props;
    const { amount } = this.state;
    return (
      <div key={data._id} style={{ display: "flex", justifyContent: "space-around" }}>
        <p>
          {`You own: ${data.amount}
        stock of ${data.symbol} ${data.companyName}
        company bought on ${moment(data.date).format('MMM DD h:mm A')}
        for ${data.price}$`}
        </p>
          <FormGroup key="form" controlId="howMany" bsSize="large" style={{ display: 'flex' }} >
            <ControlLabel style={{ alignSelf: 'center', fontSize: '15px' }}>Amount:</ControlLabel>
            <FormControl
                style={{ minWidth:'100px', alignSelf: 'center', textAlign: 'center', padding: '0', height: '30px'}}
                type="number"
                placeholder="quantity"
                min={0}
                max={100000}
                required
                value={amount}
                onChange={e => this.setState({ amount: e.target.value })}
              />
            <Button
              bsSize="small"
              bsStyle="warning"
              // type="submit"
              onClick={() => sell(data._id, data.symbol, amount)}
            >
              Sell
            </Button>
          </FormGroup>
      </div>
)}}

const mapDispatchToProps = (dispatch) => {
  return {
    sell: (id, symbol, amount) => dispatch(sellStock(id, symbol, amount)),
    selectValue: (user) => dispatch(selectValue(user)),
  }
}

TransactionListElement.propTypes = {
  data: PropTypes.object.isRequired,
  sell: PropTypes.func.isRequired,
  amount: PropTypes.number,
}

export default connect(null, mapDispatchToProps)(TransactionListElement);