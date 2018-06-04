import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormGroup, FormControl, ControlLabel, InputGroup } from 'react-bootstrap';
import { inputValue } from '../actions/index'

const LoginForm = ({controlId, controlLabel, type, value, inputValue }) => (
      <div className="Login" style={{ width: '100%' }}>
        <form onSubmit={event => event.preventDefault()} style={{display: 'flex', flexDirection: 'column'}}>
          <FormGroup controlId={controlId} bsSize="large" style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center' }}>
            <ControlLabel style={{textAlign: 'center'}}>{controlLabel} </ControlLabel>
            <InputGroup>
              <FormControl
                autoFocus
                type={type}
                value={value}
                onChange={(event) => inputValue(event.target.value)}
              />
            </InputGroup>
          </FormGroup>
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
    inputValue: (value) => dispatch(inputValue(value)),
  }
}

LoginForm.propTypes = {
  inputName: PropTypes.func.isRequired,
  inputEmail: PropTypes.func.isRequired,
  inputPassword: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);