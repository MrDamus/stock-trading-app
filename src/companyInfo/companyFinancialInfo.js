import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const CompanyFinancialInfo = ({ finances }) => (
  <div style={{ alignSelf: 'center' }}>

    {/*  TODO: ADD F=CHART FORM D3 
    {finances.map((data) => 
      Object.keys(data)
        .filter(key => data[key]) 
        .map((key, i) => <p key={data[key]+i} style={{ alignSelf: 'center' }}>{`${key}: ${data[key]}`}</p>))} */}
  </div>
)

const mapStateToProps = ({ stockData }) => ({
  finances: stockData.finances,
})

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

CompanyFinancialInfo.propTypes = {
  finances: PropTypes.arrayOf(PropTypes.shape({
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

CompanyFinancialInfo.defaultProps = {
  grossProfit: '0',

}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyFinancialInfo);