import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login.jsx';
import Auth from '../../../Auth/Auth.js';
import Search from './Search.jsx';

const auth = new Auth();

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