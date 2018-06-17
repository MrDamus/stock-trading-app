import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import Chart from '../../companyInfo/chart'
import {getCompanyChart} from '../../actions/companyChart'

const durations = ['1d', '1m', '3m', '6m', 'ytd', '1y', '2y', '5y'];

const ChartTab = ({ symbol, chart, getCompanyChart }) => (
  <div style= {{}}>
    <div style= {{display: 'flex', justifyContent: 'center'}}>
      { durations.map(duration => (
        <Button
          key={''}
          onClick={() => getCompanyChart(symbol, duration)}
        >
          {duration.toUpperCase()}
        </Button>))}
    </div>
    <div style= {{display: 'flex', justifyContent: 'center'}}>
      <Chart data={chart}/>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    getCompanyChart: (symbol, periodOfTime) => dispatch(getCompanyChart(symbol, periodOfTime)),
  }
}

const mapStateToProps = ({stockData}) => ({
  price: stockData.details.latestPrice,
  symbol: stockData.details.symbol,
  chart: stockData.chartData,
})

ChartTab.propTypes = {
  price: PropTypes.any.isRequired,
  symbol: PropTypes.string.isRequired,
  chart: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  getCompanyChart: PropTypes.func.isRequired,
};

ChartTab.defaultProps = {
  price: 0,
  symbol: '',
  chart: [],
  history: {},
  user: {},
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartTab);
