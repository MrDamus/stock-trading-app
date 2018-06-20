import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CompanyFinancialInfo from '../../companyInfo/companyFinancialInfo'

const FinancialTab = ({ finances }) => (
  <div style= {{}}>
    <div style= {{display: 'flex', justifyContent: 'center'}}>
      <CompanyFinancialInfo data={finances}/>
    </div>
  </div>
);

const mapStateToProps = ({stockData}) => ({
  price: stockData.details.latestPrice,
  symbol: stockData.details.symbol,
})

FinancialTab.propTypes = {
  price: PropTypes.any.isRequired,
  symbol: PropTypes.string.isRequired,
  finances: PropTypes.object.isRequired,
};

FinancialTab.defaultProps = {
  price: 0,
  symbol: '',
}

export default connect(mapStateToProps)(FinancialTab);
