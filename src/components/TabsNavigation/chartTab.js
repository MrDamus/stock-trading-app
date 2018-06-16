import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import Chart from '../../companyInfo/chart'
import {getCompanyChart} from '../../actions/companyChart'
import { getCompanyFinances } from '../../actions/companyFinances'

const durations = ['1d', '1m', '3m', '6m', 'ytd', '1y', '2y', '5y'];

const ChartTab = ({ symbol, chart, getCompanyChart }) => (
  <div>
    <div style= {{display: 'flex', justifyContent: 'center'}}>
      { durations.map(duration => (
        <Button
          key={''}
          onClick={() => getCompanyChart(symbol, duration)}
        >
          {duration.toUpperCase()}
        </Button>))}
    </div>
    <Chart data={chart}/>
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    getCompanyChart: (symbol, periodOfTime) => dispatch(getCompanyChart(symbol, periodOfTime)),
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

ChartTab.propTypes = {
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

ChartTab.defaultProps = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ChartTab);