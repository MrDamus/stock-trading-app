import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { sellStock } from '../actions/makeTransaction';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux'

const transactionListElement = ({ data, sell }) => (
<div key={data.date} style={{ display: "flex", justifyContent: "space-around" }}>
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
      onClick={() => sell(data.date)}
    >
      Sell
    </Button>
  </p>
</div>
)

const mapDispatchToProps = (dispatch) => {
  return {
    sell: (id) => dispatch(sellStock(id)),
  }
}

transactionListElement.propTypes = {
  data: PropTypes.object.isRequired
}

export default connect(null, mapDispatchToProps)(transactionListElement);