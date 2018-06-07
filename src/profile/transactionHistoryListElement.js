import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const transactionHistoryListElement = ({ data }) => (
  <div key={data.date} style={{ display: "flex", justifyContent: "space-around" }}>
    <p>
      {`
      You sold: ${data.amount} stocks of ${data.symbol} ${data.companyName}
       on ${moment(data.date).format('MMM DD h:mm A')} for ${data.price}$ earning: $
      `}
    </p>
  </div>
)

transactionHistoryListElement.propTypes = {
  data: PropTypes.object.isRequired
}

export default transactionHistoryListElement;