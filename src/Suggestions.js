import React from 'react'
import PropTypes from 'prop-types';

const Suggestions = ({ companies, onSelect }) => {
  const options = companies.map(company => (
    <li 
      onClick={() => onSelect(company.symbol)} 
      key={company.symbol}>
      {`${company.symbol}: ${company.name}`}
    </li>
  ))
  return <ul>{options}</ul>
}

Suggestions.propTypes = {
  companies: PropTypes.arrayOf(PropTypes.shape({ name : String, symbol: String })),
  onSelect: PropTypes.func
};

export default Suggestions