import React from 'react'
import PropTypes from 'prop-types'
import { Popover, OverlayTrigger , Button} from 'react-bootstrap'

const popoverHoverFocus = (
  <Popover id="suggestionsHover" title="Holy guacamole!">
    <strong>It works!</strong> Check this information.
  </Popover>
);

const Suggestions = ({ companies, onSelect }) => {
  const options = companies.map(company => (
    <ul 
      onClick={() => onSelect(company.symbol)} 
      key={company.symbol}>
      <OverlayTrigger
        trigger={['hover', 'focus']}
        placement="bottom"
        overlay={popoverHoverFocus}
        >
        <Button>{`${company.symbol}: ${company.name}`}</Button>
      </OverlayTrigger>
    </ul>

  ))
  return <ul style={{ width: '0px', marginLeft: '-80px'}}>{options}</ul>
}

Suggestions.propTypes = {
  companies: PropTypes.arrayOf(PropTypes.shape({ name : String, symbol: String })),
  onSelect: PropTypes.func
};

export default Suggestions