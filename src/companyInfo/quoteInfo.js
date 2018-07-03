import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import moment from 'moment'  // some needs to use this to convert timestamp

var timestampRegex = new RegExp('^\\d{13}$');

const isTimestamp = (input) => input.toString().match(timestampRegex)
const QuoteInfo = ({ details }) => (
  <div style={{ display: 'flex', flexFlow: 'column wrap', height: '325px', justifyContent: 'space-between' }}>
    {details ? Object.keys(details)
        .map((key, i) => (
          <div key={details[key]} style={{display: 'flex'}}>
            <p style={{ marginRight: '5px', fontWeight: 'bold'}}> 
              {fixStr(key)}: 
            </p>
            <p>
              {isTimestamp(details[key])
                ? moment(details[key]).format('MMM DD h:mm A'): // filter shorter than 9 digits
                details[key]}
            </p>  
          </div>
        ))
      : null
    }
  </div>
)

function fixStr(str) {
  var out = str.replace(/^[a-z]|[^\s][A-Z]/g, function(str, offset) {
      if (offset === 0) {
          return(str.toUpperCase());
      } else {
          return(str.substr(0,1) + " " + str.substr(1).toUpperCase());
      }
  });
  return(out);
}


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
