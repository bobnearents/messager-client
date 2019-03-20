import React, { Component } from 'react';
import TokenService from '../../services/token-service'

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  handleSubmitBasicAuth = ev => {
    ev.preventDefault();
    const {username, password} = ev.target;
    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(username.value, password.value)
    )

    username.value = '';
    password.value = '';
    this.props.onLoginSuccess();
  }

  render() { 
    return ( 
      <form onSubmit = {ev => this.handleSubmitBasicAuth(ev)}>
        <h2>Log in!</h2>
        <label htmlFor = 'username'>Username: </label>
        <input type='text' id='username'></input>
        <label htmlFor='password'>Password: </label>
        <input type='text' id='password'></input>
        <button type = 'submit'>Submit</button>
      </form>
     );
  }
}
 
export default LoginForm;