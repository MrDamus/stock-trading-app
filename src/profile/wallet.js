import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { sellStock } from '../actions';
import { Button } from 'react-bootstrap';

const Wallet = (data) =>
  (<div className='wallet' key={data.date}>
    <h3>Wallet</h3>
    <ul style={{ display: "flex", justifyContent: "space-around" }}>
      <p>
        {`You own: ${data.amount}
   stock of ${data.symbol} ${data.companyName}
   company bought on ${moment(data.date).format('MMM DD h:mm A')}
   for ${data.price}$`}
      </p>
      <p>
        <Button
          bsSize="small"
          bsStyle="warning"
          // type="submit"
          onClick={sellStock}
        >
          Sell
  </Button>
      </p>
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