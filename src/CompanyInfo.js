import React from 'react'
import './App.css'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Button } from 'react-bootstrap'
import StockAmountPicker from './companyInfo/stockAmountPicker'
import SearchBox from './homePage/searchBox'
import Chart from './companyInfo/chart'
import {getCompanyChart} from './actions/companyChart'
import { getCompanyFinances } from './actions/companyFinances'
import CompanyFinancialInfo from './companyInfo/companyFinancialInfo'
import Summary from './companyInfo/summary'
import NavBar from './companyInfo/navBar'

const durations = ['1d', '1m', '3m', '6m', 'ytd', '1y', '2y', '5y'];

const CompanyInfo = ({ price, symbol, latestUpdate, openTime, closeTime, chart, history, user, getCompanyChart, getCompanyFinances, finances }) => (
  <div className="CompanyInfo"
    style={{ display: 'flex', flexDirection: 'column' }}>
    <p style={{ alignSelf: 'center' }}>
      Current money: {user.money}</p>
    <SearchBox history={history} />
    <Summary />
    <NavBar />
      <Button
        style={{ alignSelf: 'center' }}
        onClick={() => getCompanyFinances(symbol)}
      >
        Show financial information
      </Button>
      <p style={{ alignSelf: 'center' }}>
      {`Latest update: ${moment(latestUpdate).format('MMM DD h:mm A')}`}
      </p>
      <p style={{ alignSelf: 'center' }}>
      {`Opening time: ${moment(openTime).format('MMM DD h:mm A')}`}
      </p>
      <p style={{ alignSelf: 'center' }}>
      {`Closing time: ${moment(closeTime).format('MMM DD h:mm A')}`}
      </p>
      <CompanyFinancialInfo data={finances}/>
    <StockAmountPicker price={price} history={history} />
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    getCompanyChart: (symbol, periodOfTime) => dispatch(getCompanyChart(symbol, periodOfTime))
    ,
    getCompanyFinances: (symbol) => dispatch(getCompanyFinances(symbol))
      // .then(resp => companyFinancials.push(resp))
      
      .catch(error => alert('Sorry, could not load financial information.'))
    ,
  }
}

const mapStateToProps = ({stockData, userData}) => ({
  price: stockData.details.latestPrice,
  symbol: stockData.details.symbol,
  chart: stockData.chartData,
  user: userData.user,
  latestUpdate: stockData.details.latestUpdate,
  openTime: stockData.details.openTime,
  closeTime: stockData.details.closeTime,
})

CompanyInfo.propTypes = {
  price: PropTypes.any.isRequired,
  symbol: PropTypes.string.isRequired,
  chart: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  latestUpdate: PropTypes.number.isRequired,
  openTime: PropTypes.number.isRequired,
  closeTime: PropTypes.number.isRequired,
  getCompanyChart: PropTypes.func.isRequired,
  getCompanyFinances: PropTypes.func.isRequired,
};

CompanyInfo.defaultProps = {
  price: 0,
  symbol: '',
  chart: [],
  history: {},
  user: {},
  latestUpdate: 0,
  openTime: 0,
  closeTime: 0,
  change: 0,
  changePercent: 0
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyInfo);