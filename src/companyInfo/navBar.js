import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Tabs, Tab } from 'react-bootstrap'

const NavBar = ({ symbol, logo, companyName, price }) => (
  <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
  <Tab eventKey={1} title="Tab 1">
    Tab 1 content
  </Tab>
  <Tab eventKey={2} title="Tab 2">
    Tab 2 content
  </Tab>
  <Tab eventKey={3} title="Tab 3" disabled>
    Tab 3 content
  </Tab>
</Tabs>
)

const mapStateToProps = ({stockData}) => ({
  price: stockData.details.latestPrice,
})

NavBar.propTypes = {
  price: PropTypes.any.isRequired,
 
}

NavBar.defaultProps = {
  price: 0,
  
}

export default connect(mapStateToProps, null)(NavBar);