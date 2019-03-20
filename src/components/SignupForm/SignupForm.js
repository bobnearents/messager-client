import React, { Component } from 'react';
import ApiService from "../../services/api-service";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleSubmit = ev => {
    ev.preventDefault();
     const { name } = ev.target;

    ApiService.createForm(
      name.value
    );
    name.value='';

    this.props.onSignupSuccess();
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

export default SignupForm;