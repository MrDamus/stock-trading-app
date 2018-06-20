import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import CompanyFinancialInfo from '../companyInfo/companyFinancialInfo'
import ChartTab from '../components/TabsNavigation/chartTab'
import SummaryTab from '../components/TabsNavigation/summaryTab';

const NavBar = () => (
  <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
  <Tab eventKey={1} title="Summary">
    <SummaryTab/>
  </Tab>
  <Tab eventKey={2} title="Chart">
    <ChartTab />
  </Tab>
  <Tab eventKey={3} title="Financial">
    <CompanyFinancialInfo />
  </Tab>
  </Tabs>
)

export default NavBar;
