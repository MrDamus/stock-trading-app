import React, { Component } from 'react';
import './App.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { connect } from 'react-redux'


const ENDPOINT = 'https://api.iextrading.com/1.0/'
class CompanyInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      query: '',
      companies: [],
      price: '',
      chart: []
    };
  }

  componentDidMount() {
   this.getChart(this.props.symbol)
  }

  getPrice(symbol) {
    fetch(`${ENDPOINT}stock/${symbol}/price`)
      .then(response => response.json())
      .then(data => this.setState({ price: data }))
      .then(() => this.props.history.push('/about'))
      .catch(e => console.warn('Fetching error:', e));
  }
  getChart(symbol) {
    fetch(`${ENDPOINT}stock/${symbol}/chart`)
    .then(response => response.json())
    .then(data => this.setState({ chart: data }))
    .catch(e => console.warn('Fetching error:', e));
  }

  render() {    
    return (
      <div className="CompanyInfo">
      
        <div id="companyInfo">
          <p>
            {`price of company: ${this.props.price}`}
          </p>
          <LineChart width={730} height={250} data={this.state.chart}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis dataKey="open" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="open" stroke="#8884d8" />
        </LineChart>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({stockData}) => ({
  price: stockData.price,
  symbol: stockData.symbol
})

export default connect(mapStateToProps)(CompanyInfo);
