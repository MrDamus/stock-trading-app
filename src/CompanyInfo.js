import React, { Component } from 'react';
import './App.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StockAmountPicker from './companyInfo/stockAmountPicker'

const CompanyInfo = ({ price, symbol, companyName, chart }) => (
  <div className="CompanyInfo"
    style={{ display: 'flex', flexDirection: 'column' }}>
    <p style={{ alignSelf: 'center' }}>
      {`Latest price of ${symbol} ${companyName} is ${price}`}
    </p>
    <LineChart width={730} height={250} data={chart}
      // margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      style={{ alignSelf: 'center' }}
    >
      <CartesianGrid strokeDasharray="5 5" />
      <XAxis dataKey="date" />
      <YAxis dataKey="open" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="open" stroke="#8884d8" />
      <Line type="monotone" dataKey="close" stroke="#8884d8" />
    </LineChart>
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
  price: '0',
  symbol: 'company symbol',
  companyName: 'company name',
  chart: {}
}

export default connect(mapStateToProps)(CompanyInfo);
