var path = require('path');
import React, { Component } from 'react';
// import { Navbar, Button } from 'react-bootstrap';
import Auth0Lock from 'auth0-lock';
import Auth from '../../../Auth/Auth.js';
// import './App.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
  }

  login() {
    this.props.auth.login();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
        <div>Login</div>
      );
  }
}

export default Login;



/* 
<div className="login-page">
  <div className="row">
    <div className="col s12">
      <div className="card white">
        <div className="card-content blue-text">
          <span className="card-title landing-title">Welcome to BudgetTrip!</span>
        </div>
        <div className="card-action landing">
          <strong><a
            style={{ cursor: 'pointer' }}
            className="waves-effect red lighten-1 btn"
            onClick={this.login}
          >
          Log In/Sign Up
          </a></strong>
        </div>
      </div>
    </div>
  </div>
</div>
*/