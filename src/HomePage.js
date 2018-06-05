import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
// import Suggestions from './Suggestions'
import { selectCompany } from './actions'
import { fetchCompaniesData } from './actions/stockData'
import PropTypes from 'prop-types'
import { Button } from "react-bootstrap"
import SearchBox from './homePage/searchBox'

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchCompaniesData()
  }

  render() {
    return (
      <div className="HomePage" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
        <Button
            style={{alignSelf: 'flex-end', maxWidth: '100px', marginBottom: '30px'}}
            block
            bsSize="small"
            bsStyle="success"
            type="submit"
            onClick={() => this.props.history.push('/login')}
          >
            Login
          </Button>
          <SearchBox history={this.props.history} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectProfile: (symbol, price) => dispatch(selectCompany(symbol, price)),
    fetchCompaniesData: () =>  dispatch(fetchCompaniesData()),
  }
}

HomePage.propTypes = {
  selectProfile: PropTypes.func
};

HomePage.defaultProps = {
 selectProfile: {}
}

export default connect(null, mapDispatchToProps)(HomePage);
