import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const QuoteInfo = ({ details }) => (
  <div style={{ alignSelf: 'center' }}>
    { Object.keys(details)
        .filter(key => details[key]) 
        .map((key, i) => <p key={details[key]+i} style={{ alignSelf: 'center' }}>{`${key}: ${details[key]}`}</p>)}
  </div>
)

const mapStateToProps = ({ stockData }) => ({
  details: stockData.details,
})

QuoteInfo.propTypes = {
  details: PropTypes.arrayOf(PropTypes.shape({
    reportDate : String,
    grossProfit: Number,
    costOfRevenue: Number,
    operatingRevenue: Number,
    totalRevenue: Number,
    operatingIncome: Number,
    netIncome: Number,
    researchAndDevelopment: Number,
    operatingExpense: Number,
    currentAssets: Number,
    totalAssets: Number,
    currentCash: Number,
    currentDebt: Number,
    totalCash: Number,
    totalDebt: Number,
    shareholderEquity: Number,
    cashChange: Number,
    cashFlow: Number
  })),
};

QuoteInfo.defaultProps = {
  grossProfit: '0',

}

export default connect(mapStateToProps, null)(QuoteInfo);
