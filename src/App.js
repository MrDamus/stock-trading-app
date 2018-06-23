import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import HomePage from './HomePage'
import CompanyInfo from './CompanyInfo'
import Login from './Login'
import Profile from './Profile'
import { connect } from 'react-redux'
import { fetchCompaniesData } from './actions/stockData'
import PropTypes from 'prop-types'
import { getProfile } from './actions/user';

class App extends Component {
  componentDidMount() {
    const { getProfile } = this.props;
    if (this.props.companies.length <= 0)
    this.props.fetchCompaniesData()
    // check 
    const tokenString = localStorage.getItem('token');

    if (typeof tokenString == 'string') {
      const token = JSON.parse(tokenString);
      getProfile(token)
    }
  }

  render() {
    return (
      <Router>
        <div>
        {/* Debug Menu  */}
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" 
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
          crossOrigin="anonymous"
        />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/info">Info</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
          <hr />
          <Route exact path="/" component={HomePage} />
          <Route path="/info" component={CompanyInfo} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({companies}) => ({
  companies: companies.companies
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCompaniesData: () =>  dispatch(fetchCompaniesData()),
    getProfile: (token) => dispatch(getProfile(token)),

  }
}

App.propTypes = {
  fetchCompaniesData: PropTypes.func,
  companies: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
