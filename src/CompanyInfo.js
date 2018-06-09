import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StockAmountPicker from './companyInfo/stockAmountPicker'
import Chart from './companyInfo/chart'
import SearchBox from './homePage/searchBox'

const CompanyInfo = ({ price, symbol, companyName, chart, history, user }) => (
  <div className="CompanyInfo"
    style={{ display: 'flex', flexDirection: 'column' }}>
    <p>Current money: {user.money}</p>
    <SearchBox history={history} />
    <p style={{ alignSelf: 'center' }}>
      {`Latest price of ${symbol} ${companyName} is ${price}`}
    </p>
    <Chart data={chart}/>
    <div>
      <StockAmountPicker price={price} history={history} />
    </div>
  </div>
);

const mapStateToProps = ({stockData, userData}) => ({
  price: stockData.details.latestPrice,
  symbol: stockData.details.symbol,
  companyName: stockData.details.companyName,
  chart: stockData.chartData,
  user: userData.user,
})

CompanyInfo.propTypes = {
  price: PropTypes.any,
  symbol: PropTypes.string,
  companyName: PropTypes.string,
  chart: PropTypes.array
};

CompanyInfo.defaultProps = {
  price: 0,
  symbol: 'company symbol',
  companyName: 'company name',
  chart: {}
}

export default connect(mapStateToProps)(CompanyInfo);
