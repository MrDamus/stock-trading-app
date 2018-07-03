import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import StockAmountPicker from './stockAmountPicker'

const GeneralInfo = ({ logo, companyName, price, change, changePercent, symbol, history }) => (
  <div style={{display: 'flex', justifyContent: 'space-around'}}>
    <div>
      <img style={{ maxWidth: '128px'}} src={logo.url} alt={companyName}/>
    </div>
    <div style={{display: 'flex', flexDirection: 'column', alignSelf: 'center'}}>
      <p style={{ alignSelf: 'center' }}>{`${symbol} ${companyName}`}</p>
      <p >{`Last price: ${price}`}</p>
      <p style={{ alignSelf: 'center' }}>
        Change:
      </p>
        <p style={{ alignSelf: 'center', color: change > 0 ? 'green' : 'red'}}>{`$${change} (${changePercent}%)`}</p>
    </div>
    <StockAmountPicker price={price} history={history} />
  </div>
);

const mapStateToProps = ({stockData, userData}) => ({
  price: stockData.details.latestPrice,
  symbol: stockData.details.symbol,
  companyName: stockData.details.companyName,
  chart: stockData.chartData,
  user: userData.user,
  sector: stockData.details.sector,
  change: stockData.details.change,
  changePercent: stockData.details.changePercent,
  latestUpdate: stockData.details.latestUpdate,
  openTime: stockData.details.openTime,
  closeTime: stockData.details.closeTime,
  logo: stockData.logo,
})

GeneralInfo.propTypes = {
  price: PropTypes.any.isRequired,
  symbol: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  sector: PropTypes.string.isRequired,
  change: PropTypes.number.isRequired,
  changePercent: PropTypes.number.isRequired,
  logo: PropTypes.object.isRequired,
}

GeneralInfo.defaultProps = {
  price: 0,
  symbol: '',
  companyName: '',
  chart: [],
  sector: '',
  change: 0,
  changePercent: 0,
  logo: {}
}

export default connect(mapStateToProps, null)(GeneralInfo);
