import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const CompanyFinancialInfo = ({ finances }) => (
  <div style={{ alignSelf: 'center' }}>

     {/* TODO: ADD F=CHART FORM D3  */}
    {finances ? finances.map((data) => 
      Object.keys(data)
        .filter(key => data[key]) 
        .map((key, i) => <p key={data[key]+i} style={{ alignSelf: 'center' }}>{`${key}: ${data[key]}`}</p>))
      : null
    }
  </div>
)

const mapStateToProps = ({ stockData }) => ({
  finances: stockData.finances,
})

CompanyFinancialInfo.propTypes = {
  finances: PropTypes.arrayOf(PropTypes.shape({
    reportDate : String,
    
  })),
};

CompanyFinancialInfo.defaultProps = {
  grossProfit: '0',

}

export default connect(mapStateToProps)(CompanyFinancialInfo);
