import React from 'react';
import { Button } from "react-bootstrap";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login, createNewUser } from '../actions/loginForm'
import { clearDatabase } from '../actions'

const Buttons = ({ login, createNewUser, clearDatabase, isInputValid }) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <div style={{ alignSelf: 'center', minWidth: '180px', marginTop: '10px' }}>
      <Button
        block
        bsSize="large"
        bsStyle="success"
        disabled={!isInputValid}
        type="submit"
        onClick={login}
      >
        Login
          </Button>
    </div>
    <div style={{ alignSelf: 'center', minWidth: '180px', marginTop: '10px' }}>
      <Button
        block
        bsSize="large"
        bsStyle="primary"
        disabled={!isInputValid}
        type="submit"
        onClick={createNewUser}
      >
        Create account
         </Button>
    </div>
    <div style={{ alignSelf: 'center', minWidth: '180px', marginTop: '10px' }}>
      <Button
        block
        bsSize="large"
        bsStyle="danger"
        // type="submit"
        onClick={clearDatabase}
      >
        Clear database
         </Button>
    </div>
  </div>
)

const mapStateToProps = ({ loginForm }) => ({
  name: loginForm.name,
  email: loginForm.email,
  password: loginForm.password,
  isInputValid: loginForm.name && loginForm.email && loginForm.password
})

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    login: () => dispatch(login())
      .then(resp => history.push('/profile'))
      .catch(error => alert('Sorry, something went wrong'))
    ,
    updateUserDetails: () => dispatch(login()),
    createNewUser: () => dispatch(createNewUser())
    .then(resp => history.push('/profile'))
    .catch(error => alert('Sorry, user already exists'))
    ,
    clearDatabase: () => dispatch(clearDatabase()),
  }
}

Buttons.propTypes = {
  login: PropTypes.func.isRequired,
  clearDatabase: PropTypes.func.isRequired,
  createNewUser: PropTypes.func.isRequired,
  isInputValid: PropTypes.bool
};

Buttons.defaultProps = {
  isInputValid: false
};

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);