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

const CompanyInfo = ({ price, symbol, companyName, sector, change, changePercent, latestUpdate, openTime, closeTime, chart, history, user, getCompanyChart, getCompanyFinances, finances, logo }) => (
  <div className="CompanyInfo"
    style={{ display: 'flex', flexDirection: 'column' }}>
    <p style={{ alignSelf: 'center' }}>
      Current money: {user.money}</p>
    <SearchBox history={history} />
      <img style={{ maxWidth: '200px'}} src={logo.url} />
      <p style={{ alignSelf: 'center' }}>{`${symbol} ${companyName}`}</p>
      <p style={{ alignSelf: 'center' }}>{`Sector : ${sector}`}</p>
      <p style={{ alignSelf: 'center' }}>{`Last price: ${price}`}</p>
      <p style={{ alignSelf: 'center', color: change>0 ? 'green' : 'red'}}>{`Change: ${change} (${changePercent}%)`}</p>
      <Button
        style={{ alignSelf: 'center' }}
        onClick={() => getCompanyFinances(symbol)}
      >
        Show financial information
      </Button>
      
      <CompanyFinancialInfo data={finances}/>

      <p style={{ alignSelf: 'center' }}>
      {`Latest update: ${moment(latestUpdate).format('MMM DD h:mm A')}`}
      </p>
      <p style={{ alignSelf: 'center' }}>
      {`Opening time: ${moment(openTime).format('MMM DD h:mm A')}`}
      </p>
      <p style={{ alignSelf: 'center' }}>
      {`Closing time: ${moment(closeTime).format('MMM DD h:mm A')}`}
      </p>
    <div style= {{display: 'flex', justifyContent: 'center'}}>
      {/* TODO: map buttonsin 1 line */}
      <Button
        onClick={() => getCompanyChart(symbol, '1d')}
      >
        Last day
      </Button>
      <Button
        onClick={() => getCompanyChart(symbol, '1m')}
      >
        Last month
      </Button>
      <Button
        onClick={() => getCompanyChart(symbol, '3m')}
      >
        Last 3 months
      </Button>
      <Button
        onClick={() => getCompanyChart(symbol, '6m')}
      >
        Last 6 months
      </Button>
      <Button
        onClick={() => getCompanyChart(symbol, 'ytd')}
      >
        This year
      </Button>
      <Button
        onClick={() => getCompanyChart(symbol, '1y')}
      >
        Last year
      </Button>
      <Button
        onClick={() => getCompanyChart(symbol, '2y')}
      >
        Last 2 years
      </Button>
      <Button
        onClick={() => getCompanyChart(symbol, '5y')}
      >
        Last 5 years
      </Button>
    </div>
    <Chart data={chart}/>
    <StockAmountPicker price={price} history={history} />
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    getCompanyChart: (symbol, periodOfTime) => dispatch(getCompanyChart(symbol, periodOfTime))
      .catch(error => alert('Sorry, something went wrong'))
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
  grossProfit: stockData.finances.grossProfit,
})

CompanyInfo.propTypes = {
  price: PropTypes.any.isRequired,
  symbol: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  chart: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  sector: PropTypes.string.isRequired,
  latestUpdate: PropTypes.number.isRequired,
  openTime: PropTypes.number.isRequired,
  closeTime: PropTypes.number.isRequired,
  getCompanyChart: PropTypes.func.isRequired,
  getCompanyFinances: PropTypes.func.isRequired,
  change: PropTypes.number.isRequired,
  changePercent: PropTypes.number.isRequired,
};

CompanyInfo.defaultProps = {
  price: 0,
  symbol: '',
  companyName: '',
  chart: [],
  history: {},
  user: {},
  sector: '',
  latestUpdate: 0,
  openTime: 0,
  closeTime: 0,
  change: 0,
  changePercent: 0
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyInfo);