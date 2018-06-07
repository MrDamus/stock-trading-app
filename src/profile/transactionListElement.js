import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { sellStock } from '../actions/makeTransaction';
import { Button } from 'react-bootstrap';

const transactionListElement = ({ data }) => (
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
      onClick={sellStock}
    >
      Sell
    </Button>
  </p>
</div>
)

transactionListElement.propTypes = {
  data: PropTypes.object.isRequired
}

export default transactionListElement;