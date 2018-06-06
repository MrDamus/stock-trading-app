import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StockAmountPicker from './companyInfo/stockAmountPicker'
import Chart from './companyInfo/chart'

const CompanyInfo = ({ price, symbol, companyName, chart }) => (
  <div className="CompanyInfo"
    style={{ display: 'flex', flexDirection: 'column' }}>
    <p style={{ alignSelf: 'center' }}>
      {`Latest price of ${symbol} ${companyName} is ${price}`}
    </p>
    <Chart data={chart}/>
    <div>
      <StockAmountPicker price={price}/>
    </div>
  </div>
);

const mapStateToProps = ({stockData}) => ({
  price: stockData.details.latestPrice,
  symbol: stockData.details.symbol,
  companyName: stockData.details.companyName,
  chart: stockData.chartData
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
