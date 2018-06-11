import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StockAmountPicker from './companyInfo/stockAmountPicker'
import Chart from './companyInfo/chart'
import SearchBox from './homePage/searchBox'
import moment from 'moment'


const CompanyInfo = ({ price, symbol, companyName, sector, latestUpdate, openTime, closeTime, chart, history, user }) => (
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
    <Chart data={chart}/>
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
  user: PropTypes.array.isRequired
};

CompanyInfo.defaultProps = {
  price: 0,
  symbol: 'company symbol',
  companyName: 'company name',
  chart: {}
}

export default connect(mapStateToProps)(CompanyInfo);