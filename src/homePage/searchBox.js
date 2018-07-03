import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Suggestions from '../Suggestions'
import { selectCompany } from '../actions'
import { getCompanyDetails } from '../actions/companyDetails'

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'aapl',
    };
  }

  render() {
    const { inputValue } = this.state;
    const { companies, getCompanyDetails } = this.props;
    const companiesToDisplay = inputValue ? searching(companies, inputValue).slice(0, 5) : []
    return (
        <form onSubmit={event => event.preventDefault()} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <input
            style={{ alignSelf: 'center', textAlign: 'center' }}
            type="text"
            id="searchInput"
            onChange={(e) =>  this.setState({inputValue: e.currentTarget.value.toUpperCase().replace(/\W/g, '')})}
            placeholder="Search for company">
            
          </input>
          <Suggestions
            companies={companiesToDisplay}
            onSelect={getCompanyDetails}
          />
        </form>
      )
  }
}

const searching = (companies, inputValue) => 
  companies.filter(({ name, symbol }) =>
    name.toLowerCase().match(inputValue.toLowerCase()) ||
    symbol.toLowerCase().match(inputValue.toLowerCase()))

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    selectProfile: (symbol, price) => dispatch(selectCompany(symbol, price)),
    getCompanyDetails: symbol => dispatch(getCompanyDetails(symbol))
      .then(resp => history.push('/info'))
      .catch(error => alert('Sorry, something went wrong')),
  }
}

const mapStateToProps = ({ companies }) => ({
  companies: companies.companies,
})

SearchBox.propTypes = {
  companies: PropTypes.array.isRequired,
  getCompanyDetails: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);