import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import CompanyFinancialInfo from '../companyInfo/companyFinancialInfo'
import ChartTab from '../components/TabsNavigation/chartTab'

const NavBar = () => (
  <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
  <Tab eventKey={1} title="Tab 1">
    
  </Tab>
  <Tab eventKey={2} title="Chart">
    <ChartTab />
  </Tab>
  <Tab eventKey={3} title="Tab 3" disabled>
    <CompanyFinancialInfo />
  </Tab>
  </Tabs>
)


export default NavBar;