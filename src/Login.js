import React, { Component } from 'react';
import './App.css';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginSuccess } from './actions'
import userData from './reducers/userData';



const serverUrl = 'http://localhost:8080/users/'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      query: '',
      companies: [],
      price: '',
      chart: [],
      user: {
        name: "",
        email: "",
        password: ""
      }
    };
    this.validateForm = this.validateForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    return this.state.user.email.length > 0 && this.state.user.password.length > 0;
  }

  login() {
      fetch(`http://localhost:8080/users/${this.state.user.email}`, {
          method: 'POST',
          body: JSON.stringify({ password: this.state.user.password }),
          headers: {
            'content-type': 'application/json'
          },
      })
      .then((data) => data.json())
      .then(data => {
        console.warn(data)
        this.props.loginSuccess(data)
      })
      .then(() => this.props.history.push('/profile'))
      .catch(e => alert(e))
  }

  handleChange(event) {
    this.setState({
      user: {...this.state.user, [event.target.id] : event.target.value}
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleErrors(response) {
    if (!response.ok) {
      throw response.json();
    }
    return response;
}


  createNewUser(user) {
    return fetch(serverUrl, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'content-type': 'application/json'
        },
    })
    .then(this.handleErrors)
    .then((data) => data.json())
    .then(() => this.props.history.push('/profile'))
    .catch(e => {
      Promise.resolve(e)
      .then(a => alert(a.error))
    })
  }

  clearDatabase(e) {
    fetch(serverUrl, {
        method: 'DELETE',
        body: e,
    })
  //   .then(res => res.json())
  //  .then(json => {
  //   this.setState({user: this.state.user.filter(user => { 
  //     return user._id !== e._id // change this to match your code if necessary
  //   })})
    // .then((e) => console.log(e))
    console.log('All records from database has been cleared.')
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="name" bsSize="large">
            <ControlLabel>Name</ControlLabel>
            <FormControl
              autoFocus
              type="name"
              value={this.state.user.name}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.user.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.user.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            onClick={() => this.login()}
          >
            Login
          </Button>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            onClick={()=> this.createNewUser(this.state.user)}
          >
            Create account
          </Button>
          <Button
            block
            bsSize="large"
            // type="submit"
            onClick={() => this.clearDatabase()}
          >
            Clear database
          </Button>
        </form>
      </div>
    );
  }
}

// TODO: map dispatch top props, LOGIN
const mapDispatchToProps = (dispatch) => {
  return {
    loginSuccess: (user) => dispatch(loginSuccess(user)),
  }
}

Login.propTypes = {
  // user: propTypes.array
};

Login.defaultProps = {
  user: []
}

export default connect(null, mapDispatchToProps)(Login);