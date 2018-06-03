import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import Suggestions from './Suggestions'
import { selectCompany } from './actions'
import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";


const ENDPOINT = 'https://api.iextrading.com/1.0/'
const ENDPOINT_companies = `${ENDPOINT}/ref-data/symbols`

const SERVER_ENDPOINT = 'http://localhost:8080/'

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      query: '',
      companies: [],
      price: '',
      users: []
    };
    this.getCompanyDetails = this.getCompanyDetails.bind(this)
  }

  componentDidMount() {
    fetch(ENDPOINT_companies)
      .then(response => response.json())
      .then(data => this.setState({ companies: data.map(d => ({ symbol: d.symbol, name: d.name })) }))
      .catch(e => console.warn('Fetching error:', e));

    fetch(`${SERVER_ENDPOINT}users`)
      .then(response => response.json())
      .then(data => this.setState({ users: data }))
      .catch(e => console.warn('Fetching error:', e));
  }

  getCompanyDetails(symbol) {
    fetch(`${ENDPOINT}/stock/${symbol}/batch?types=quote,chart`)
      .then(response => response.json())
      .then(data => this.props.selectProfile({ details: data.quote, chartData: data.chart  }))
      .then(() => this.props.history.push('/info'))
      .catch(e => console.warn('Fetching error:', e));
  }

  handleInputChange() {
    this.setState({
      query: this.search.value
  })}

  render() {
    const { companies, inputValue } = this.state;
    const searching = companies.filter(({ name, symbol }) =>
      name.toLowerCase().match(inputValue.toLowerCase()) ||
      symbol.toLowerCase().match(inputValue.toLowerCase())
    )
    return (
      <div className="HomePage" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
        <Button
            style={{alignSelf: 'flex-end', maxWidth: '100px', marginBottom: '30px'}}
            block
            bsSize="small"
            bsStyle="success"
            type="submit"
            // onClick={() => this.props.login()}
          >
            Login
          </Button>
        <form style={{display: 'flex', justifyContent: 'center'}}>
          <input
            style={{alignSelf: 'flex-end'}}
            type="text"
            id="searchInput"
            onChange={(e) =>  this.setState({inputValue: e.currentTarget.value.toUpperCase().replace(/\W/g, '')})}
            placeholder="Search for company">
          </input>
          <Suggestions companies={inputValue ? searching.slice(0, 5) : []}
            onSelect={this.getCompanyDetails}
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

HomePage.propTypes = {
  selectProfile: PropTypes.func
};

HomePage.defaultProps = {
 selectProfile: {}
}

export default connect(null, mapDispatchToProps)(HomePage);
