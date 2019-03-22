import React, { Component } from "react";
import TokenService from "../../services/token-service";
import AuthApiService from "../../services/auth-api-service";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmitBasicAuth = ev => {
    ev.preventDefault();
    const { username, password } = ev.target;
    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(username.value, password.value)
    );

    username.value = "";
    password.value = "";
    this.props.onLoginSuccess();
  };

  handleSubmitJwtAuth = ev => {
    ev.preventDefault();
    this.setState({ error: null });
    const { username, password } = ev.target;

    AuthApiService.postLogin({
      username: username.value,
      password: password.value
    })
      .then(res => {
        username.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        this.props.onLoginSuccess();
      })
      .catch(res => {this.setState({error: res.error})})
  };

  render() {
    return (
      <form onSubmit={ev => this.handleSubmitJwtAuth(ev)}>
        <h2>Log in!</h2>
        <label htmlFor="username">Username: </label>
        <input type="text" id="username" />
        <label htmlFor="password">Password: </label>
        <input type="text" id="password" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default LoginForm;
