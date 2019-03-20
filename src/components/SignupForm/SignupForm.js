import React, { Component } from 'react';
import ApiService from "../../services/api-service";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleSubmit = ev => {
    ev.preventDefault();
    const { full_name, username, password, nickname } = ev.target;
    console.log(username.value)
    ApiService.createUser(
      full_name.value,
      username.value,
      password.value,
      nickname.value
    );
    full_name.value='';
    username.value='';
    password.value='';
    nickname.value='';

    this.props.onSignupSuccess();

  }

  render() {
    return (
      <form onSubmit={ev => this.handleSubmit(ev)}>
        <h2>Sign Up!</h2>

        <label htmlFor="full_name">full name: </label>
        <input type="text" id="full_name" />

        <label htmlFor="username">Username: </label>
        <input type="text" id="username" />

        <label htmlFor="password">Password: </label>
        <input type="text" id="password" />

        <label htmlFor="nickname">nickname: </label>
        <input type="text" id="nickname" />

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default SignupForm;