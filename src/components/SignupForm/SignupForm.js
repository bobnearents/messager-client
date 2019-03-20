import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import ApiService from "../../services/api-service";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleSubmit = ev => {
    ev.preventDefault();
     const { username, password, fullName, nickname } = ev.target;

    ApiService.createUser(username.value,password.value,fullName.value,nickname.value);
    username.value = '';
    password.value = '';
    fullName.value = '';
    nickname.value = '';
    // TokenService.saveAuthToken(
    //   TokenService.makeBasicAuthToken(username.value, password.value)
    // )
  }

  render() {
    return (
      <form onSubmit={ev => this.handleSubmit(ev)}>
        <h2>Sign Up!</h2>

        <label htmlFor="username">Username: </label>
        <input type="text" id="username" />

        <label htmlFor="password">Password: </label>
        <input type="text" id="password" />

        <label htmlFor="fullName">full name: </label>
        <input type="text" id="fullName" />

        <label htmlFor="nickname">nickname: </label>
        <input type="text" id="nickname" />

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default LoginForm;