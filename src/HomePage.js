import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import Suggestions from './Suggestions'
import { selectCompany } from './actions'

const ENDPOINT = 'https://api.iextrading.com/1.0/'
const ENDPOINT_companies = `${ENDPOINT}/ref-data/symbols`

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
    fetch(`${ENDPOINT}/stock/${symbol}/price`)
      .then(response => response.json())
      .then(data => this.setState({ price: data }))
      .then(() => this.props.selectProfile( symbol, this.state.price))
      .then(() => this.props.history.push('/info'))
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

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectProfile: (symbol, price) => dispatch(selectCompany(symbol, price)),
  }
}

export default connect(null, mapDispatchToProps)(App);
