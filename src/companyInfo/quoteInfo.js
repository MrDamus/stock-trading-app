import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// TODO: change finances for details it's object so map doesn't work
const QuoteInfo = ({ details }) => (
  <div style={{ alignSelf: 'center' }}>
    {details ? Object.keys(details)
        .map((key, i) => (
          <div key={details[key]} style={{display: 'flex'}}>
            <p style={{ }}>
            {key}
            </p>
            <p>
              {details[key]}
            </p>  
          </div>
        ))
      : null
    }
  </div>
)

const mapStateToProps = ({ stockData }) => ({
  details: stockData.details,
})

QuoteInfo.propTypes = {
  finances: PropTypes.arrayOf(PropTypes.shape({
    reportDate : String,
    
  })),
};

QuoteInfo.defaultProps = {
  grossProfit: '0',

}

export default connect(mapStateToProps)(QuoteInfo);
