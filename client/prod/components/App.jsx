import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, BrowserRouter, Redirect, withRouter } from 'react-router-dom';
import Search from './Search.jsx';
import Auth from '../../../Auth/Auth.js';
const auth = new Auth();

auth.handleAuthentication();

class App extends React.Component {
  constructor(props)
{    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  // render() {
  //   return (
  //     <div>
  //       <Login auth={auth}/>
  //       <Search />
  //     </div>
  //   );
  // }
  render() {
    if (auth.isAuthenticated()) {
      console.log('Authenticated');
    } else {
      console.log('Login Page');
    }


    return (
      <MuiThemeProvider>
        <div>
          <Login auth={auth} />
          <Search />
        </div>
      </MuiThemeProvider>
    );
  }
}
export default App;


      // <BrowserRouter>
      //   <Route path="/" component={Login} ></Route>
      //   <Route path="/login" render={(props) => { Login }}></Route>

      //   <div>
      //     <Login auth={auth}/>
      //     <Search />
      //   </div>
      // </BrowserRouter>