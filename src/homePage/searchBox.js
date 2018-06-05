import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Suggestions from '../Suggestions'
import { selectCompany } from '../actions'
import { getCompanyDetails } from '../actions/companyDetails'
import { fetchCompaniesData } from '../actions/stockData'
import CompaniesData from '../reducers/companies'
import companyDetails from '../actions'


class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  render() {
    const { inputValue } = this.state;
    const { companies } = this.props;
    console.log(companies.length, inputValue)
    const companiesToDisplay = inputValue ? searching(companies, inputValue).slice(0, 5) : []
    return (
        <form style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <input
            style={{ alignSelf: 'center' }}
            type="text"
            id="searchInput"
            // onChange={e => changeInputValue({ inputValue: e.currentTarget.value.toUpperCase().replace(/\W/g, '') })}
            onChange={(e) =>  this.setState({inputValue: e.currentTarget.value.toUpperCase().replace(/\W/g, '')})}
            placeholder="Search for company">
          </input>
          <Suggestions
            companies={companiesToDisplay}
            onSelect={this.getCompanyDetails}
          />
        </form>
      )
  }
}

const searching = (companies, inputValue) => 
  companies.filter(({ name, symbol }) =>
    name.toLowerCase().match(inputValue.toLowerCase()) ||
    symbol.toLowerCase().match(inputValue.toLowerCase()))

const mapDispatchToProps = (dispatch) => {
  return {
    inputValue: (inputValue) => dispatch(this.state(inputValue)),
    selectProfile: (symbol, price) => dispatch(selectCompany(symbol, price)),
    fetchCompaniesData: () =>  dispatch(fetchCompaniesData()),

  }
}

const mapStateToProps = ({ companies }) => ({
  companies: companies.companies,
})

SearchBox.propTypes = {
  amount: PropTypes.number,
  price: PropTypes.number,
  selectValue: PropTypes.func,
  buyStock: PropTypes.func,
};

SearchBox.defaultProps = {
  amount: '0',
  price: '0',
  selectValue: () => null,
  buyStock: () => null,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);