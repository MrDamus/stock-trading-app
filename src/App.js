import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from './HomePage';
import CompanyInfo from './CompanyInfo';
import Login from './Login';

const BasicExample = () => (
  <Router>
    <div>
{/* Debug Menu  */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/info">Info</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>

      <hr />

    {/*TODO: Login Button  */}
          
      <Route exact path="/" component={HomePage} />
      <Route path="/info" component={CompanyInfo} />
      <Route path="/login" component={Login} />
      {/*TODO: Profile Route  */}
      {/* <Route path="/profile" component={Profile} /> */}
    </div>
  </Router>
);



export default BasicExample;