import auth0 from 'auth0-js';
import history from './history.js';
import { AUTH_CONFIG } from './Auth0-variables.js';
import Auth0Lock from 'auth0-lock';

const lock = new Auth0Lock(AUTH_CONFIG.clientId, AUTH_CONFIG.domain, {
  theme: {
    logo: 'https://www.graphicsprings.com/filestorage/stencils/74cd6537a23f9e0bd1c4525d06517099.svg',
    primaryColor: '#3A99D8'
  }

  // oidcConformant: false,
  // autoclose: true,
  // redirect: true,
  // closable: true,
  // allowSignUp: true,
  // auth: {
  //   //redirectUrl: keys.callbackUrl
  //   responseType: 'token id_token',
  //   scope: 'openid profile'
  // }
});

// lock.on('authenticated', function(authResult) {
//   console.log('Result of authentication', authResult);

//   if (!authResult.accessToken) return;

//   lock.getUserInfo(authResult.accessToken, function(error, profile) {
//     console.log(error, profile);
//   });
// });

// lock.on('authorization_error', function(error) {
//   console.log('authorization_error', error);
// });

lock.show();

export default class Auth {
  constructor() {
    // this.handleAuthentication();
    // binds functions to keep this context
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.setSession = this.setSession.bind(this);
  }

login() {
  this.auth0.authorize();
}

handleAuthentication() {
  this.auth0.parseHash((err, authResult) => {
    if (authResult && authResult.accessToken && authResult.idToken) {
      this.setSession(authResult);
      history.replace('/home');
    } else if (err) {
      history.replace('/home');
      console.log(err);
      alert(`Error: ${err.error}. Check the console for further details.`);
    }
  });
}

setSession(authResult) {
  // Set the time that the access token will expire at
  let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
  localStorage.setItem('access_token', authResult.accessToken);
  localStorage.setItem('id_token', authResult.idToken);
  localStorage.setItem('expires_at', expiresAt);
  // navigate to the home route
  history.replace('/home');
}

logout() {
  // Clear access token and ID token from local storage
  localStorage.removeItem('access_token');
  localStorage.removeItem('id_token');
  localStorage.removeItem('expires_at');
  // navigate to the home route
  history.replace('/home');
}

isAuthenticated() {
  // Check whether the current time is past the 
  // access token's expiry time
  let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
  return new Date().getTime() < expiresAt;
}
}


// module.exports.Auth = Auth;