import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, ControlLabel, InputGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginSuccess, inputName, inputEmail, inputPassword } from './actions/index'
import Buttons from './Login/buttons'

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      user: { ...this.state.user, [event.target.id]: event.target.value }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Login" style={{ width: '100%' }}>
        <form onSubmit={this.handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
          <FormGroup controlId="name" bsSize="large" style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center' }}>
            <ControlLabel style={{textAlign: 'center'}}>Name </ControlLabel>
            <InputGroup>
              <FormControl
                autoFocus
                type="name"
                value={this.props.name}
                onChange={(event) => this.props.inputName(event.target.value)}
              />
            </InputGroup>
          </FormGroup>
          <FormGroup controlId="email" bsSize="large" style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center' }}>
            <ControlLabel style={{textAlign: 'center'}}>Email </ControlLabel>
            <InputGroup>
              <FormControl
                autoFocus
                type="email"
                value={this.props.email}
                onChange={(event) => this.props.inputEmail(event.target.value)}
              />
            </InputGroup>
          </FormGroup>
          <FormGroup controlId="password" bsSize="large" style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center' }}>
            <ControlLabel style={{textAlign: 'center'}}>Password </ControlLabel>
            <InputGroup>
              <FormControl
                autoFocus
                value={this.props.password}
                onChange={(event) => this.props.inputPassword(event.target.value)}
                type="password"
              />
            </InputGroup>
          </FormGroup>
          <Buttons history={this.props.history} />
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({loginForm}) => ({
  name: loginForm.name,
  email: loginForm.email,
  password: loginForm.password,  
})


// TODO: map dispatch to props, LOGIN
const mapDispatchToProps = (dispatch) => {
  return {
    inputName: (name) => dispatch(inputName(name)),
    inputEmail: (email) => dispatch(inputEmail(email)),
    inputPassword: (password) => dispatch(inputPassword(password)),
    loginSuccess: (user) => dispatch(loginSuccess(user)),
  }
}

Login.propTypes = {
  loginSuccess: PropTypes.func,
};

Login.defaultProps = {
  loginSuccess: 'Login has succeed'
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);