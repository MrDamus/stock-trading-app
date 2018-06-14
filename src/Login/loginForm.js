import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormControl, ControlLabel, InputGroup } from 'react-bootstrap';

const LoginForm = ({ name, inputValue, onChange }) => (
  <FormGroup controlId={name} bsSize="large" style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center' }}>
    <ControlLabel style={{textAlign: 'center'}}>{name} </ControlLabel>
    <InputGroup>
      <FormControl
        style={{ textAlign: 'center'}}
        autoFocus
        type={name}
        value={inputValue}
        onChange={onChange}
      />
    </InputGroup>
  </FormGroup>
);

LoginForm.propTypes = {
  name: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LoginForm;