import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, InputGroup } from "react-bootstrap";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginSuccess, login, createNewUser, clearDatabase } from '../actions'


const serverUrl = 'http://localhost:8080/users/'


class Buttons extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     inputValue: '',
  //     query: '',
  //     price: '',
  //     chart: [],
  //     user: {
  //       name: "" || "xyz",
  //       email: "" || "xyz@gmail.com",
  //       password: "" || "xyz"
  //     }
  //   };

  //   this.validateForm = this.validateForm.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  handleSubmit(event) {
    event.preventDefault();
  }

  // handleErrors(response) {
  //   if (!response.ok) {
  //     throw response.json();
  //   }
  //   return response;
  // }

    validateForm() {
    return this.state.user.email.length > 0 && this.state.user.password.length > 0;
  }

  // login() {
  //   fetch(`http://localhost:8080/users/${this.state.user.email}`, {
  //     method: 'POST',
  //     body: JSON.stringify({ password: this.state.user.password }),
  //     headers: {
  //       'content-type': 'application/json'
  //     },
  //   })
  //     .then((data) => data.json())
  //     .then(data => {
  //       console.warn(data)
  //       this.props.loginSuccess(data)
  //     })
  //     .then(() => this.props.history.push('/profile'))
  //     .catch(e => alert(e))
  // }

  // createNewUser(user) {
  //   return fetch(serverUrl, {
  //     method: 'POST',
  //     body: JSON.stringify(user),
  //     headers: {
  //       'content-type': 'application/json'
  //     },
  //   })
  //     .then(this.handleErrors)
  //     .then((data) => data.json())
  //     .then(() => this.props.history.push('/profile'))
  //     .catch(e => {
  //       Promise.resolve(e)
  //         .then(a => alert(a.error))
  //     })
  // }

  // clearDatabase(e) {
  //   fetch(serverUrl, {
  //     method: 'DELETE',
  //     body: e,
  //   })
  //   console.log('All records from database has been cleared.')
  // }

  render() {
    const { login, createNewUser, clearDatabase, handleErrors } = this.props

    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{ alignSelf: 'center', minWidth: '180px', marginTop: '10px' }}>
          <Button
            block
            bsSize="large"
            bsStyle="success"
            // disabled={!this.validateForm()}
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
            // disabled={!this.validateForm()}
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
  }
}

const mapStateToProps = ({loginForm}) => ({
  name: loginForm.name,
  email: loginForm.email,
  password: loginForm.password,  
})

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    login: () => dispatch(login())
    .then(resp => history.push('/profile'))
    .catch(error => alert('Sorry, something went wrong'))
      ,
    createNewUser: () => dispatch(createNewUser()),
    clearDatabase: () => dispatch(clearDatabase()),
  }
}

Buttons.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);