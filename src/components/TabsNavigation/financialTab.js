import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import { getCompanyFinances } from '../../actions/companyFinances'
import CompanyFinancialInfo from '../../companyInfo/companyFinancialInfo'


const FinancialTab = ({ finances, symbol }) => (
  <div style= {{}}>
    <div>
    <Button
        style={{ alignSelf: 'center' }}
        onClick={() => getCompanyFinances(symbol)}
      >
        Show financial information
      </Button>

    </div>
    <div style= {{display: 'flex', justifyContent: 'center'}}>
      <CompanyFinancialInfo data={finances}/>
    </div>

  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    getCompanyFinances: (symbol) => dispatch(getCompanyFinances(symbol))
      // .then(resp => companyFinancials.push(resp))
      .catch(error => alert('Sorry, could not load financial information.'))
    ,
  }
}

const mapStateToProps = ({stockData, userData}) => ({
  price: stockData.details.latestPrice,
  symbol: stockData.details.symbol,
})

FinancialTab.propTypes = {
  price: PropTypes.any.isRequired,
  symbol: PropTypes.string.isRequired,
};

FinancialTab.defaultProps = {
  price: 0,
  symbol: '',
  chart: [],
}

export default connect(mapStateToProps, mapDispatchToProps)(FinancialTab);