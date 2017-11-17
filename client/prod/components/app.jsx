import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login.jsx';
import Auth from '../../../Auth/Auth.js';

const auth = new Auth();

import Search from './Search.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Login auth={auth}/>
        <Search />
      </div>
    );
  }
}
export default App;