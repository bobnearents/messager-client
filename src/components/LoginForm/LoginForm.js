import React, { Component } from "react";
import TokenService from "../../services/token-service";
import AuthApiService from "../../services/auth-api-service";
import MessageContext from "../../context/message-context";
import { Link } from "react-router-dom";
import './LoginForm.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static contextType = MessageContext;

  handleSubmitJwtAuth = ev => {
    ev.preventDefault();
    this.setState({ error: null });
    this.context.loadingTrue();
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
        this.context.loadingFalse();
      })
      .catch(res => {this.setState({error: res.error})})
  };

  render() {

    const error = this.state.error;
    return (
      <div className="signup-form">
        <h2 className='form-header'>Log in!</h2>
        <form onSubmit={ev => this.handleSubmitJwtAuth(ev)}>
          {error && <span className='error'>{error}</span>}
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" />
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" />
          <button type="submit">Submit</button>

          <div>
            Don't have an account?
            <Link to='/signup'>Make one here</Link>
          </div>
          
        </form>
      </div>
    );
  }
}

export default LoginForm;
