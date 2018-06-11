import React from 'react'
import './App.css'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import StockAmountPicker from './companyInfo/stockAmountPicker'
import Chart from './companyInfo/chart'
import SearchBox from './homePage/searchBox'
import moment from 'moment'
import { Button } from "react-bootstrap";
import {getCompanyChart} from './actions/companyChart'

const CompanyInfo = ({ price, symbol, companyName, sector, latestUpdate, openTime, closeTime, chart, history, user, getCompanyChart }) => (
  <div className="CompanyInfo"
    style={{ display: 'flex', flexDirection: 'column' }}>
    <p style={{ alignSelf: 'center' }}>
      Current money: {user.money}</p>
    <SearchBox history={history} />
      <p style={{ alignSelf: 'center' }}>
      {`${symbol} ${companyName}`}
      </p>
      <p style={{ alignSelf: 'center' }}>
      {`Sector : ${sector} `}
      </p>
      <p style={{ alignSelf: 'center' }}>
      {`Latest price: ${price}`}
      </p>
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
    </div>
    <Chart data={chart}/>
    <StockAmountPicker price={price} history={history} />
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    getCompanyChart: (symbol, periodOfTime) => dispatch(getCompanyChart(symbol, periodOfTime))
      .catch(error => alert('Sorry, something went wrong'))
  }
}

const mapStateToProps = ({stockData, userData}) => ({
  price: stockData.details.latestPrice,
  symbol: stockData.details.symbol,
  companyName: stockData.details.companyName,
  chart: stockData.chartData,
  user: userData.user,
  sector: stockData.details.sector,
  latestUpdate: stockData.details.latestUpdate,
  openTime: stockData.details.openTime,
  closeTime: stockData.details.closeTime,
})

CompanyInfo.propTypes = {
  price: PropTypes.any.isRequired,
  symbol: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  chart: PropTypes.array.isRequired,
  history: PropTypes.array.isRequired,
  user: PropTypes.array.isRequired,
  sector: PropTypes.array.isRequired,
  latestUpdate: PropTypes.array.isRequired,
  openTime: PropTypes.array.isRequired,
  closeTime: PropTypes.array.isRequired
};

CompanyInfo.defaultProps = {
  price: 0,
  symbol: 'company symbol',
  companyName: 'company name',
  chart: {},
  history: [],
  user: [],
  sector: [],
  latestUpdate: [],
  openTime: [],
  closeTime: []
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyInfo);