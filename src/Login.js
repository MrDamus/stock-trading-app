import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { inputName, inputEmail, inputPassword } from './actions/loginForm'
import Buttons from './Login/buttons'
import FormInput from './Login/loginForm'

const Login = ({inputName, inputEmail, inputPassword, name, email, password, history}) => (
      <div className="Login" style={{ width: '100%' }}>
        <form onSubmit={event => event.preventDefault()} style={{display: 'flex', flexDirection: 'column'}}>
          <FormInput name="name" inputValue={name} onChange={(event) => inputName(event.target.value)} />
          <FormInput name="email" inputValue={email} onChange={(event) => inputEmail(event.target.value)} />
          <FormInput name="password" inputValue={password} onChange={(event) => inputPassword(event.target.value)} />
          <Buttons history={history} />
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