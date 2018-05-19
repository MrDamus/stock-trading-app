import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import Suggestions from './Suggestions'
import { withRouter } from 'react-router-dom'

const ENDPINT = 'https://api.iextrading.com/1.0/'
const ENDPOINT_companies = `${ENDPINT}/ref-data/symbols`

const resp = {"logo":{"url":"https://storage.googleapis.com/iex/api/logos/AAPL.png"},"price":188.59}
const data = [{ name: 'a', value: 5 }, { name: 'b', value: 15 } , { name: 'c', value: 25 }]
class App extends Component {
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
    fetch(`${ENDPINT}/stock/${symbol}/price`)
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
    const { companies, inputValue } = this.state;
    const searching = companies.filter(({ name, symbol }) =>
      name.toLowerCase().match(inputValue.toLowerCase()) ||
      symbol.toLowerCase().match(inputValue.toLowerCase())
    )
    return (
      <div className="App">
        <form>
          <input
            type="text"
            id="searchInput"
            onChange={(e) =>  this.setState({inputValue:e.currentTarget.value.toUpperCase()})}
            placeholder="Search for company">
          </input>
          <Suggestions companies={inputValue ? searching.slice(0, 5) : []}
            onSelect={(c) => this.getPrice(c) }
          />
        </form>
        <LineChart width={730} height={250} data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="value" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </div>
    );
  }
}

export default withRouter(({ history }) => <App history={history} />);
