import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
// import "./Login.css";



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      query: '',
      companies: [],
      price: '',
      chart: [],
      id: {
        name: "",
        email: "",
        password: ""
      }
    };
  }

  componentDidMount() {
  //  this.getChart(this.props.symbol)
  }


  // render() {    
  //   return (
  //     <div className="Login">
  //      <p>Login</p>
  //     </div>
  //   )
  // }




  validateForm() {
    return this.state.id.email.length > 0 && this.state.id.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }


//   createNewProfile(profile) {
//     const formData = new FormData();
//     formData.append('name', profile.firstName);
//     // formData.append('last_name', profile.lastName);
//     formData.append('email', profile.email);
//     return fetch('http://example.com/api/v1/registration', {
//         method: 'POST',
//         body: formData
//     })
//     .then(response => response.json())
//   }

// // createNewProfile(profile)
// //    .then((json) => {
// //        // handle success
// //     })
// //    .catch(error => error);



  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
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
            // disabled={!this.createNewProfile()}
            type="submit"
          >
            Create account
          </Button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = ({stockData}) => ({
  price: stockData.price,
  symbol: stockData.symbol
});
export default connect(mapStateToProps)(Login);