import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Suggestions from '../Suggestions'
import { selectCompany } from '../actions'
  
const searching = (companies, inputValue) => companies.filter(({ name, symbol }) =>
  name.toLowerCase().match(inputValue.toLowerCase()) ||
  symbol.toLowerCase().match(inputValue.toLowerCase())
)

const SearchBox = (inputValue, getCompanyDetails) => (
  <form style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
    <input
      style={{ alignSelf: 'center' }}
      type="text"
      id="searchInput"
      onChange={e => changeInputValue({ inputValue: e.currentTarget.value.toUpperCase().replace(/\W/g, '') })}
      placeholder="Search for company">
    </input>
    <Suggestions
      companies={inputValue ? searching([],'').slice(0, 5) : []} // searching([],'') []-companies, ''-input value
      onSelect={getCompanyDetails}
    />
  </form>
)

const mapDispatchToProps = (dispatch) => {
  return {
    // inputValue: (user) => dispatch(inputValue(user)),
    selectProfile: (symbol, price) => dispatch(selectCompany(symbol, price)),
  }
}

const mapStateToProps = ({ stockPicker }) => ({
  amount: stockPicker.amount // TODO: companies
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
