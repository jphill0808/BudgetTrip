var path = require('path');
import React, { Component } from 'react';
// import { Navbar, Button } from 'react-bootstrap';
import Auth0Lock from 'auth0-lock';
import axios from 'axios';
const Lock = require('../../../Auth/Auth.js').Lock;

class Login extends Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
  }

  componentWillMount(){
    this.props.auth.handleAuthentication();
    Lock.on('authenticated', function(authResult) {
      console.log('Result of authentication', authResult);

      if (!authResult.accessToken) return;

      Lock.getUserInfo(authResult.accessToken, function(error, profile) {
        console.log("error", error, "profile", profile);

        axios.post('http://localhost:1130/api/signup', profile)
        .then(function(sucess) {
          console.log("user data", sucess);
          window.location.reload();
        })
        .catch(function(error) {
          console.log(error);
        })
      });

    });

    Lock.on('authorization_error', function(error) {
      console.log('authorization_error', error);
    });

    Lock.show();
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