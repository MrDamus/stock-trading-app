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
    <div
    style={{ alignSelf: 'center' }}
      onClick={() => onSelect(company.symbol)} 
      key={company.symbol}>
      <OverlayTrigger
        trigger={['hover', 'focus']}
        placement="bottom"
        overlay={popoverHoverFocus}
        >
        <Button>{`${company.symbol}: ${company.name}`}</Button>
      </OverlayTrigger>
    </div>

  ))
  return <div style={{ alignSelf: 'center', display: 'flex', flexDirection: 'column'}}>{options}</div>
}

Suggestions.propTypes = {
  companies: PropTypes.arrayOf(PropTypes.shape({ name : String, symbol: String })),
  onSelect: PropTypes.func
};

export default Suggestions