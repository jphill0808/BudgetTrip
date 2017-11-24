import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, BrowserRouter, Redirect, withRouter } from 'react-router-dom';
import Search from './Search.jsx';
import Header from './Header.jsx';
import Auth from '../../../Auth/Auth.js';
import Profile from './Header_Helpers/Profile.jsx';
import Budget from './Budget.jsx';

const auth = new Auth();
console.log(auth.isAuthenticated());
const style = {

}

class App extends React.Component {
  constructor(props)
{    super(props);
    this.state = {
      user: {
        username: '',
        email: '',
        location: ''
      }
    };
  }

  componentDidMount() {
    if (auth.isAuthenticated()) {
      let localCookieProfile = JSON.parse(localStorage.getItem('profile'));

      let user = {
        username: localCookieProfile.name,
        email: localCookieProfile.email,
        location: 'California'
      };
      this.setState({user})
    }
  }

  render() {
    if (!auth.isAuthenticated()) {
      return (<Login auth={auth}/>)
    } else {
      return (
        <MuiThemeProvider>
          <div>
            <Header auth={auth} user={this.state.user}/>
            <Search />
            <Profile user={this.state.user}/>
            <Budget />
          </div>
        </MuiThemeProvider>
      );
    }
  }
}
export default App;