import React from 'react';
import './App.css';
import { FormGroup, FormControl, ControlLabel, InputGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { inputName, inputEmail, inputPassword } from './actions/loginForm'
import Buttons from './Login/buttons'
import LoginForm from './Login/loginForm'

const Login = ({inputName, inputEmail, inputPassword, name, email, password}) => (
      <div className="Login" style={{ width: '100%' }}>
        <form onSubmit={event => event.preventDefault()} style={{display: 'flex', flexDirection: 'column'}}>
          {/* Create form input field component  zrobic jeden ogolny component i tylko props sie zmienia w zaleznosci co uzywa*/}
          <LoginForm controlId='Name' controlLabel={inputName} type='name'/>
          <LoginForm controlLabel={inputEmail}/>
          <LoginForm controlLabel={inputPassword}/>          
          {/* <FormGroup controlId="name" bsSize="large" style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center' }}>
            <ControlLabel style={{textAlign: 'center'}}>Name </ControlLabel>
            <InputGroup>
              <FormControl
                autoFocus
                type="name"
                value={name}
                onChange={(event) => inputName(event.target.value)}
              />
            </InputGroup>
          </FormGroup>
          <FormGroup controlId="email" bsSize="large" style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center' }}>
            <ControlLabel style={{textAlign: 'center'}}>Email </ControlLabel>
            <InputGroup>
              <FormControl
                autoFocus
                type="email"
                value={email}
                onChange={(event) => inputEmail(event.target.value)}
              />
            </InputGroup>
          </FormGroup>
          <FormGroup controlId="password" bsSize="large" style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center' }}>
            <ControlLabel style={{textAlign: 'center'}}>Password </ControlLabel>
            <InputGroup>
              <FormControl
                autoFocus
                value={password}
                onChange={(event) => inputPassword(event.target.value)}
                type="password"
              />
            </InputGroup>
          </FormGroup> */}
          <Buttons onClick={() => this.props.history.push('/profile')} />
        </form>
      </div>
    );

const mapStateToProps = ({loginForm}) => ({
  name: loginForm.name,
  email: loginForm.email,
  password: loginForm.password,  
})

const mapDispatchToProps = (dispatch) => {
  return {
    inputName: (name) => dispatch(inputName(name)),
    inputEmail: (email) => dispatch(inputEmail(email)),
    inputPassword: (password) => dispatch(inputPassword(password)),
  }
}

Login.propTypes = {
  inputName: PropTypes.func.isRequired,
  inputEmail: PropTypes.func.isRequired,
  inputPassword: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);