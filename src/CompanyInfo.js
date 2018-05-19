import React, { Component } from 'react';
import './App.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import Suggestions from './Suggestions'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'


const ENDPOINT = 'https://api.iextrading.com/1.0/'
const ENDPOINT_companies = `${ENDPOINT}/ref-data/symbols`

const resp = {"logo":{"url":"https://storage.googleapis.com/iex/api/logos/AAPL.png"},"price":188.59}
const data = [{ name: 'a', value: 5 }, { name: 'b', value: 15 } , { name: 'c', value: 25 }]

class CompanyInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      query: '',
      companies: [],
      price: ''
    };
  }

  componentDidMount() {
    fetch(ENDPOINT_companies)
      .then(response => response.json())
      .then(data => this.setState({ companies: data.map(d => ({ symbol: d.symbol, name: d.name })) }))
      .catch(e => console.warn('Fetching error:', e));
  }

  getPrice(symbol) {
    fetch(`${ENDPOINT}/stock/${symbol}/price`)
      .then(response => response.json())
      .then(data => this.setState({ price: data }))
      .then(() => this.props.history.push('/about'))
      .catch(e => console.warn('Fetching error:', e));
  }

  handleInputChange() {
    this.setState({
      query: this.search.value
  })}

  displayCompanyInfo(c) {
    document.getElementById('companyInfo').innerHTML(c)
    
  }



  render() {
    console.log(this.props.price);
    const { companies, inputValue } = this.state;
    const searching = companies.filter(({ name, symbol }) =>
      name.toLowerCase().match(inputValue.toLowerCase()) ||
      symbol.toLowerCase().match(inputValue.toLowerCase())
    )
    return (
      <div className="CompanyInfo">
      
        <div id="companyInfo">
          <p>
            {`price of company: ${this.props.price}`}
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({stockData}) => ({
  price: stockData.price
})

export default connect(mapStateToProps)(CompanyInfo);
