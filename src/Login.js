import React, { Component } from 'react';
import './App.css';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

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
        name: "Test",
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

  handleChange(event) {
    this.setState({
      user: {...this.state.user, [event.target.id] : event.target.value}
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.createNewUser(this.state.user);
  }


  createNewUser(user) {
    return fetch('http://localhost:8080/users', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'content-type': 'application/json'
        },
    })
    .catch(e => console.warn(e))
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
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
          >
            Login
          </Button>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Create account
          </Button>
        </form>
      </div>
    );
  }
}

export default Login;