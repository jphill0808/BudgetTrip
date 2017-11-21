import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';

const styles = {
  outer: {
    width: 1280,
    height: 720,
    margin: 20,
    display: 'inline-block'
  },
  submit: {
    float: "right",
    margin: "2cm"
  }
};

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
      filledOut: false,
      fields: {
        'signUpName': '',
        'signUpEmail': '',
        'signUpAddress': '',
        'signUpZipCode': ''
      }
    }

    this.handleSignUpEntry = this.handleSignUpEntry.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleSignUpEntry(e, newVal) {
    let fields = Object.assign({}, this.stated.fields);
    fields[e.target.id] = newVal;
    this.setState({fields})
  };

  handleCheck() {
    this.setState((prevState) => {
      return {
        checked: !oldState.checked
      };
    });
  };

  handleOnSubmit(e) {
    if (!this.state.checked) {
      alert('Liscense Agreement Checkbox?')
    } else if (this.state.filledOut) {
      //AXIOS REQ??
    } else {
      alert('Please complete all fields')
    }
  }

  render(){
    return (
      <div>
        <h1>Sign Up</h1>
        <Paper style={style.outer} zDepth={2}>
          <TextField
            id="signUpName"
            hintText="Name"
            value={this.state.fields['signUpName']}
            onChange={(e, newVal) => {this.handleSignUpEntry(e, newVal)}}
            /><br />
          <TextField
            id="signUpEmail"
            hintText="Email"
            value={this.state.fields['signUpEmail']}
            onChange={(e, newVal) => {this.handleSignUpEntry(e, newVal)}}
            /><br />
          <TextField
            id="signUpAddress"
            hintText="Home Address"
            value={this.state.fields['signUpAddress']}
            onChange={(e, newVal) => {this.handleSignUpEntry(e, newVal)}}
            />
          <TextField
            id="signUpZipCode"
            hintText="ZipCode"
            value={this.state.fields['signUpZipCode']}
            onChange={(e, newVal) => {this.handleSignUpEntry(e, newVal)}}
            />
          <Checkbox
            label="Agree"
            checked={this.state.checked}
            onCheck={this.updateCheck.bind(this)}
            style={styles.checkbox}
            />
          <RaisedButton
            style={styles.submit}
            label="Submit"
            onClick={(e) => {this.handleOnSubmit(e)}}
            />
        </Paper>
      </div>
      )
  }
}

export default SignUp;