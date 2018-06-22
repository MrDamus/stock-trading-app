import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import QuoteInfo from '../../companyInfo/quoteInfo'

const SummaryTab = ({ details }) => (
  <div style= {{}}>
    <div style= {{display: 'flex', justifyContent: 'center'}}>
      <QuoteInfo data={details}/>
    </div>
  </div>
);

const mapStateToProps = ({stockData}) => ({
  price: stockData.details.latestPrice,
  symbol: stockData.details.symbol,
})

SummaryTab.propTypes = {
  price: PropTypes.any.isRequired,
  symbol: PropTypes.string.isRequired,
  details: PropTypes.object.isRequired,
};

SummaryTab.defaultProps = {
  price: 0,
  symbol: '',
}

export default connect(mapStateToProps)(SummaryTab);
