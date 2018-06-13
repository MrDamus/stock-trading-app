import React from 'react'
import './App.css'
import { connect } from 'react-redux'
import { selectCompany } from './actions'
import { fetchCompaniesData } from './actions/stockData'
import PropTypes from 'prop-types'
import { Button } from "react-bootstrap"
import SearchBox from './homePage/searchBox'

const HomePage = ({ history }) => (
      <div className="HomePage" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
        <Button
            style={{alignSelf: 'flex-end', maxWidth: '100px', marginBottom: '30px'}}
            block
            bsSize="small"
            bsStyle="success"
            type="submit"
            onClick={() => history.push('/login')}
          >
            Login
          </Button>
          <SearchBox history={history} />
      </div>
    );

const mapDispatchToProps = (dispatch) => {
  return {
    selectProfile: (symbol, price) => dispatch(selectCompany(symbol, price)),
    fetchCompaniesData: () =>  dispatch(fetchCompaniesData()),
  }
}

HomePage.propTypes = {
  selectProfile: PropTypes.func,
  history: PropTypes.object
};

HomePage.defaultProps = {
 selectProfile: {},
 history: {},
}

export default connect(null, mapDispatchToProps)(HomePage);